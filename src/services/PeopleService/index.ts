import { Endpoints } from 'services/endpoints'
import { HttpClient } from 'services/http'
import type { People } from 'types/People/PeopleType'

class PeopleService {
  public constructor(private http: HttpClient) {}

  public async get() {
    const response = await this.http.get<People[]>('?results=20')
    return response
  }
}

export const peopleService = new PeopleService(
  new HttpClient(Endpoints.randomuser)
)
