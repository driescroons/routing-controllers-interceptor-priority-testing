import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<User[]> {
    const users: User[] = this.users;
    return users;
  }
}

export default UserService;
