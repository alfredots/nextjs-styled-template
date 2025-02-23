import { UserGateway } from '@/application/gateways';
import { User } from '@/domain/entities';
import { GetUsers } from '@/domain/use-cases';

export class GetUsersImpl implements GetUsers {
  constructor(private readonly userGateway: UserGateway) {}

  async execute(): Promise<User[]> {
    return await this.userGateway.getAll();
  }
}
