import { useCallback, useState } from 'react'

import { peopleService } from 'services/PeopleService'
import type { People } from 'types'

export const usePeople = () => {
  const [peoples, setPeoples] = useState<People[]>([])

  const getPeoples = useCallback(async () => {
    try {
      const { data: peoplesData } = await peopleService.get()

      setPeoples(peoplesData)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return {
    getPeoples,
    peoples
  }
}
