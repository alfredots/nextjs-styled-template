import * as S from './styles';

import { userService } from '@/infra/services';
import { Box } from '@/ui/components/Box';
import { useFetchUsers } from '@/ui/modules/Home/useFetchUsers';

export const HomeModule = () => {
  const { users } = useFetchUsers({ userService });

  return (
    <main>
      <S.Heading>
        TWD <span>NEXT</span>
      </S.Heading>
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
