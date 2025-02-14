import { useEffect } from 'react';

import { User } from '@/contracts/models';
import { UserService } from '@/contracts/services';
import { useAsyncReducer } from '@/ui/hooks/useAsyncReducer';

type UseFetchUsersProps = {
  userService: UserService;
};

export const useFetchUsers = ({ userService }: UseFetchUsersProps) => {
  const [state, dispatch] = useAsyncReducer<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: 'FETCH_START' });

        const fetchedUsers = await userService.get();

        dispatch({ type: 'FETCH_SUCCESS', payload: fetchedUsers });
      } catch (error) {
        console.error(error);
        dispatch({ type: 'FETCH_ERROR' });
      }
    })();
  }, [dispatch, userService]);

  return { users: state.data };
};
