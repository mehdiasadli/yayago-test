'use client';

import RatingInput from '@/components/rating-input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { ReviewsApi } from '@/features/reviews/reviews.api';
import { CreateReviewRequestDto } from '@/features/reviews/reviews.dto';
import { reviewsQueryKeys } from '@/features/reviews/reviews.queries';
import { TCreateReviewRequest, TGetCarReviewsResponse, TUpdateReviewRequest } from '@/features/reviews/reviews.types';
import { useForm } from '@tanstack/react-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Loader2, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import z from 'zod';

interface AddReviewFormProps {
  userReview?: TGetCarReviewsResponse[number];
  userId: string;
  carId: number;
}

export default function AddReview({ userReview, userId, carId }: AddReviewFormProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm({
    formId: 'add-review-form',
    defaultValues: {
      rating: userReview?.rating.toString() || '',
      comment: userReview?.comment || '',
      carId,
    },
    validators: {
      onSubmit: CreateReviewRequestDto.omit({ rating: true }).extend({
        rating: z.string(),
      }),
    },
  });

  const { mutate: createReview, isPending: isCreatePending } = useMutation({
    mutationFn: async (data: TCreateReviewRequest) => {
      const response = await ReviewsApi.createReview(data);

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onSuccess: (created) => {
      // Optimistically update list cache
      queryClient.setQueryData<TGetCarReviewsResponse>(reviewsQueryKeys.listById(carId.toString()), (prev = []) => [
        ...prev,
        created,
      ]);
      // Refresh aggregates
      queryClient.invalidateQueries({ queryKey: reviewsQueryKeys.countByCarId(carId.toString()) });
      queryClient.invalidateQueries({ queryKey: reviewsQueryKeys.averageRatingByCarId(carId.toString()) });
      router.refresh();
    },
  });

  const { mutate: updateReview, isPending: isUpdatePending } = useMutation({
    mutationFn: async (data: TUpdateReviewRequest) => {
      if (userReview === undefined) {
        return;
      }

      const response = await ReviewsApi.updateReview({ reviewId: userReview.id }, data);

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onSuccess: (updated) => {
      if (!updated) {
        return;
      }

      // Optimistically update list cache
      queryClient.setQueryData<TGetCarReviewsResponse>(reviewsQueryKeys.listById(carId.toString()), (prev = []) =>
        prev.map((r) => (r.id === updated.id ? updated : r))
      );
      queryClient.invalidateQueries({ queryKey: reviewsQueryKeys.countByCarId(carId.toString()) });
      queryClient.invalidateQueries({ queryKey: reviewsQueryKeys.averageRatingByCarId(carId.toString()) });
      router.refresh();
    },
  });

  const { mutate: deleteReview, isPending: isDeletePending } = useMutation({
    mutationFn: async () => {
      if (userReview === undefined) {
        return;
      }

      const response = await ReviewsApi.deleteReview({ reviewId: userReview.id });

      if (!response.success) {
        throw new Error(response.message);
      }
    },
    onSuccess: () => {
      if (!userReview) {
        return;
      }

      // Optimistically remove from cache
      queryClient.setQueryData<TGetCarReviewsResponse>(reviewsQueryKeys.listById(carId.toString()), (prev = []) =>
        prev.filter((r) => r.id !== userReview.id)
      );
      queryClient.invalidateQueries({ queryKey: reviewsQueryKeys.countByCarId(carId.toString()) });
      queryClient.invalidateQueries({ queryKey: reviewsQueryKeys.averageRatingByCarId(carId.toString()) });
      form.reset();
      router.refresh();
    },
  });

  const submitLabel = userReview ? 'Update review' : 'Add review';
  const submitPendingLabel = userReview ? 'Updating...' : 'Adding...';

  const onCreate = () => {
    createReview({
      carId: form.state.values.carId,
      rating: Number(form.state.values.rating),
      comment: form.state.values.comment,
    });
  };

  const onUpdate = () => {
    updateReview({
      carId,
      rating: Number(form.state.values.rating),
      comment: form.state.values.comment,
    });
  };

  const onDelete = () => {
    deleteReview();
  };

  return (
    <Card className='border-slate-200 rounded-xl shadow-sm'>
      {userReview !== undefined && (
        <CardHeader className='pb-3'>
          <CardTitle className='text-sm font-semibold text-slate-900'>Your review</CardTitle>
        </CardHeader>
      )}
      <CardContent className='pt-4'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className='space-y-4'
        >
          <form.Field
            name='rating'
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className='text-xs font-semibold text-gray-700 uppercase tracking-wider'
                  >
                    Rate your experience
                  </FieldLabel>
                  <RatingInput value={field.state.value || ''} onValueChange={(value) => field.handleChange(value)} />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name='comment'
            children={(field) => {
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className='text-xs font-semibold text-gray-700 uppercase tracking-wider'
                  >
                    Comment
                  </FieldLabel>
                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder='Write your review here...'
                    rows={4}
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <div className='flex gap-3 justify-between items-center'>
            {userReview && (
              <Button
                type='button'
                className='min-w-[120px]'
                variant='destructive'
                disabled={isUpdatePending || isDeletePending}
                onClick={onDelete}
              >
                {isDeletePending ? (
                  <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                ) : (
                  <Trash2 className='w-4 h-4 mr-2' />
                )}
                {isDeletePending ? 'Deleting...' : 'Delete Review'}
              </Button>
            )}

            <Button
              type='submit'
              className='min-w-[120px]'
              onClick={userReview ? onUpdate : onCreate}
              disabled={isCreatePending || isUpdatePending || isDeletePending}
            >
              {(isCreatePending || isUpdatePending) && <Loader2 className='w-4 h-4 mr-2 animate-spin' />}{' '}
              {isCreatePending || isUpdatePending ? submitPendingLabel : submitLabel}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
