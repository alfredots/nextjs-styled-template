import { AxiosError } from 'axios'
import { People } from 'types/People/PeopleType'

export type GetAllResponse = {
  data: People
}

export type ErrorProps = {
  data: {
    error: string
  }
  status: number
} & AxiosError
