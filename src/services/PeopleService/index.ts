import { Endpoints } from 'services/endpoints'
import { HttpClient } from 'services/http'
import { People } from 'types/People/PeopleType'

class PeopleService {
  public constructor(private http: HttpClient) {}

  public get = async () => {
    const response = await this.http.get<People>('?results=20')
    return response
  }
}

export const peopleService = new PeopleService(
  new HttpClient(Endpoints.randomuser)
)
