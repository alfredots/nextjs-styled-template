import { useEffect } from 'react'

import { Box } from 'common'
import { usePeople } from 'hooks'

import * as S from './styles'

export const HomeTemplate = () => {
  const { peoples, getPeoples } = usePeople()

  useEffect(() => {
    getPeoples()
  }, [getPeoples])

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
      <p>{JSON.stringify(peoples)}</p>
    </main>
  )
}
