import { User } from '../entity/User';
export default class UserModel {
  static async addUser() {
    const user = new User();
    user.age = 10;
    user.name = 'john';
    return await user.save();
  }
}
