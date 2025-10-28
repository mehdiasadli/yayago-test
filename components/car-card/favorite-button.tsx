'use client';

import { Button } from '../ui/button';
import { AlertTriangle, Heart, Loader2, Trash2, X } from 'lucide-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createCheckFavoriteQueryOptions, favoriteQueryKeys } from '@/features/favorites/favorites.queries';
import { useSession } from 'next-auth/react';
import { FavoritesApi } from '@/features/favorites/favorites.api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FavoriteButtonProps {
  carId: string;
  isFavorite: boolean;
}

export default function FavoriteButton({ carId, isFavorite }: FavoriteButtonProps) {
  const { data: session, status } = useSession();
  const [isFavorited, setIsFavorited] = useState(isFavorite);

  if (status !== 'authenticated' || !session?.user?.id) {
    return null;
  }

  return isFavorited ? (
    <DeleteFavoriteButton carId={carId} setIsFavorited={setIsFavorited} />
  ) : (
    <CreateFavoriteButton carId={carId} setIsFavorited={setIsFavorited} />
  );
}

// when user is not favorited the car
function CreateFavoriteButton({ carId, setIsFavorited }: { carId: string; setIsFavorited: (state: boolean) => void }) {
  const { mutate, isPending } = useCreateFavoriteMutation(carId, setIsFavorited);

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
function DeleteFavoriteButton({ carId, setIsFavorited }: { carId: string; setIsFavorited: (state: boolean) => void }) {
  const { mutate, isPending } = useDeleteFavoriteMutation(carId, setIsFavorited);

  return (
    <Button variant='ghost' size='icon' className='h-full w-20' onClick={() => mutate()}>
      {isPending ? (
        <Loader2 className='w-5 h-5 animate-spin' />
      ) : (
        <Heart className='w-5 text-red-500 fill-red-500' strokeWidth={2.5} />
      )}
    </Button>
  );
}

function useCreateFavoriteMutation(carId: string, setState: (state: boolean) => void) {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const response = await FavoritesApi.createFavorite({ carId: +carId });

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onMutate: () => {
      setState(true);
    },
    onError: () => {
      setState(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.checkById(carId) });
      router.refresh();
    },
  });
}

function useDeleteFavoriteMutation(carId: string, setState: (state: boolean) => void) {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const response = await FavoritesApi.deleteFavorite({ carId: +carId });

      if (!response.success) {
        throw new Error(response.message);
      }

      return response.data;
    },
    onMutate: () => {
      setState(false);
    },
    onError: () => {
      setState(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: favoriteQueryKeys.checkById(carId) });
      router.refresh();
    },
  });
}
