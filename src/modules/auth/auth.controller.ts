import httpStatusCodes from 'http-status-codes';
import IController from '../../types/IController';
import apiResponse from '../../helpers/response.helper';
import { generateToken } from '../../helpers/encryption.helper';
import locale from '../../locale';
import AuthService from './auth.service';

const login: IController = async (req, res) => {
  const user = await AuthService.loginUser(req.body.email, req.body.password);
  if (user) {
    const authToken = await generateToken({ sub: user.id.toString() });
    apiResponse.result(res, { authToken }, httpStatusCodes.OK);
  } else {
    apiResponse.error(
      res,
      httpStatusCodes.BAD_REQUEST,
      locale.INVALID_CREDENTIALS
    );
  }
};

const changePassword: IController = async (req, res) => {
  // TODO ....
};

export default {
  login,
  changePassword,
};
