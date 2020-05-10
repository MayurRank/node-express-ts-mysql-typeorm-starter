import { getRepository } from 'typeorm';
import { User } from '../../entities/user/user.entity';
import { generateHash } from '../../helpers/encryption.helper';
import { sanitizeUser } from '../../helpers/api.helper';
import { validator } from '../../helpers/validation.helper';

const getUserByEmail = async (email: string) => {
  try {
    return await getRepository(User).findOne({ email });
  } catch (e) {
    return null;
  }
};

const getUserById = async (userId: number) => {
  try {
    return sanitizeUser(await getRepository(User).findOne({ id: userId }));
  } catch (e) {
    return null;
  }
};

const updateUser = async (user: User) => {
  return await getRepository(User).save(user);
};

const createUser = async (email: string, pass: string, name: string = '') => {
  const newUser = new User();
  newUser.email = email;
  newUser.password = pass;
  newUser.name = name;

  // Validade
  const error = await validator(newUser);
  if (error) {
    return Promise.reject(error);
  }

  newUser.password = await generateHash(newUser.password);

  return sanitizeUser(await getRepository(User).save(newUser));
};

export default {
  createUser,
  getUserById,
  updateUser,
  getUserByEmail,
};
