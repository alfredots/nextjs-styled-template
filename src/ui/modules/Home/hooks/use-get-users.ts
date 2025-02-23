import { useEffect } from 'react';

import { User } from '@/domain/entities';
import { GetUsers } from '@/domain/use-cases/get-users';
import { useAsyncReducer } from '@/ui/hooks/use-async-reducer';

type UseFetchUsersProps = {
  getUsers: GetUsers;
};

export const useGetUsers = ({ getUsers }: UseFetchUsersProps) => {
  const [{ data: users, ...rest }, dispatch] = useAsyncReducer<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: 'FETCH_START' });

        const fetchedUsers = await getUsers.execute();

        dispatch({ type: 'FETCH_SUCCESS', payload: fetchedUsers });
      } catch (error) {
        console.error(error);
        dispatch({ type: 'FETCH_ERROR' });
      }
    })();
  }, [dispatch, getUsers]);

  return { users, ...rest };
};
