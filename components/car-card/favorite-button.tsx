'use client';

import { Button } from '../ui/button';
import { AlertTriangle, Heart, Loader2, Trash2, X } from 'lucide-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createCheckFavoriteQueryOptions, favoriteQueryKeys } from '@/features/favorites/favorites.queries';
import { useSession } from 'next-auth/react';
import { FavoritesApi } from '@/features/favorites/favorites.api';

interface FavoriteButtonProps {
  carId: string;
  favoritePage?: boolean;
}

export default function FavoriteButton({ carId, favoritePage }: FavoriteButtonProps) {
  const { data: session, status } = useSession();
  const { data: isFavorite, isLoading, error } = useQuery(createCheckFavoriteQueryOptions(carId));

  if (isLoading || status === 'loading') {
    return (
      <Button variant='ghost' size='icon' className='h-full w-20'>
        <Loader2 className='w-5 h-5 animate-spin' />
      </Button>
    );
  }

  if (error || status === 'unauthenticated' || !session?.user?.id) {
    return null;
  }

  if (isFavorite) {
    return <DeleteFavoriteButton carId={carId} favoritePage={favoritePage} />;
  }

  return <CreateFavoriteButton carId={carId} />;
}

// when user is not favorited the car
function CreateFavoriteButton({ carId }: { carId: string }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await FavoritesApi.createFavorite({ carId: +carId });

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.checkById(carId) });
    },
  });

  return (
    <Button variant='ghost' size='icon' className='h-full w-20' onClick={() => mutate()}>
      {isPending ? (
        <Loader2 className='w-5 h-5 animate-spin' />
      ) : (
        <Heart className='w-5 text-red-500' strokeWidth={2.5} />
      )}
    </Button>
  );
}

// when user is favorited the car
function DeleteFavoriteButton({ carId, favoritePage }: { carId: string; favoritePage?: boolean }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await FavoritesApi.deleteFavorite({ carId: +carId });

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.checkById(carId) });
    },
  });

  return (
    <Button variant='ghost' size='icon' className='h-full w-20' onClick={() => mutate()}>
      {isPending ? (
        <Loader2 className='w-5 h-5 animate-spin' />
      ) : !favoritePage ? (
        <Heart className='w-5 text-red-500 fill-red-500' strokeWidth={2.5} />
      ) : (
        <Trash2 className='w-5 text-red-500' strokeWidth={2.5} />
      )}
    </Button>
  );
}
