import { GetUsersImpl } from '@/application/use-cases/get-users-impl';
import { GetUsers } from '@/domain/use-cases';
import { makeUserGateway } from '@/main/factories/gateways';

export const makeGetUsers = (): GetUsers => new GetUsersImpl(makeUserGateway());
