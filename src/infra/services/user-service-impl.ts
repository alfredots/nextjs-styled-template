import { HttpClient, HttpStatusCode } from '@/contracts/protocols';
import { UserService } from '@/contracts/services';
import { UserRemoteResponse } from '@/infra/dto';
import { endpoints } from '@/infra/endpoints';
import { AxiosHttpClient } from '@/infra/http';
import { UserMapper, UserMapperImpl } from '@/infra/mappers';

class UserServiceImpl implements UserService {
  public constructor(
    private url: string,
    private http: HttpClient,
    private mapper: UserMapper
  ) {}

  async get() {
    const response = await this.http.request<UserRemoteResponse[]>({
      url: this.url,
      method: 'get'
    });

    if (response.body === undefined) {
      throw new Error('Corpo da requisição veio vazio');
    }

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body.map((data) => this.mapper.toDomain(data));

      default:
        throw new Error('');
    }
  }
}

export const userService = new UserServiceImpl(endpoints.users, new AxiosHttpClient(), new UserMapperImpl());
