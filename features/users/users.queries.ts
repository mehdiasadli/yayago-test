import { queryOptions } from '@tanstack/react-query';
import { UsersApi } from './users.api';

export const usersQueryKeys = {
  index: () => ['users'] as const,

  profile: () => [...usersQueryKeys.index(), 'profile'] as const,
  profileById: (userId: number) => [...usersQueryKeys.profile(), userId] as const,
};

export const createUserProfileQueryOptions = (userId: number) =>
  queryOptions({
    queryKey: usersQueryKeys.profileById(userId),
    queryFn: async () => {
      const result = await UsersApi.getUserById({ id: userId });

      if (!result.success) {
        throw new Error(result.message);
      }

      return result.data;
    },
  });
