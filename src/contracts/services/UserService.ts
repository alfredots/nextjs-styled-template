import { User } from '@/contracts/models';

export interface UserService {
  get(): Promise<User[]>;
}
