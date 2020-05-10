import { verifyHash } from '../../helpers/encryption.helper';
import { sanitizeUser } from '../../helpers/api.helper';
import UserService from '../user/user.service';

const loginUser = async (email: string, password: string) => {
  const user = await UserService.getUserByEmail(email);
  if (user) {
    if (await verifyHash(password, user.password)) {
      user.lastLogin = new Date();
      UserService.updateUser(user); // login time
      return sanitizeUser(user);
    }
  }
  return null;
};

export default {
  loginUser,
};
