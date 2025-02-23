import { useMemo } from 'react';

import { makeGetUsers } from '@/main/use-cases';
import { Box } from '@/ui/components/Box';
import { useGetUsers } from '@/ui/modules/Home/hooks/use-get-users';

export const HomeModule = () => {
  const getUsers = useMemo(makeGetUsers, []);
  const { users } = useGetUsers({ getUsers });

  return (
    <main>
      <h2>
        TWD <span>NEXT</span>
      </h2>
      <Box
        sizing={{
          width: '100px',
          height: '100px'
        }}
      >
        teste
      </Box>
      <p>{JSON.stringify(users)}</p>
    </main>
  );
};
