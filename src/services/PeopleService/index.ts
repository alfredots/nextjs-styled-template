import { Endpoints } from 'services/endpoints'
import { HttpClient } from 'services/http'
import { People } from 'types/People/PeopleType'

class PeopleService extends HttpClient {
  public constructor() {
    super(Endpoints.url.randomuser)
  }

  public getAll = async () => {
    const response = await this.get<People>('?results=20')
    return response
  }
}

export const peopleService = new PeopleService()
