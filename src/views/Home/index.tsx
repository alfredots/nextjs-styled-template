import { Box } from 'common'

import * as S from './styles'

export const HomeView = () => {
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
    </main>
  )
}
