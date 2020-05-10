import httpStatusCodes from 'http-status-codes';
import IController from '../../types/IController';
import UserService from './user.service';
import apiResponse from '../../helpers/response.helper';
import Constants from '../../constants';
import locale from '../../locale';

const register: IController = async (req, res) => {
  let user;
  try {
    user = await UserService.createUser(
      req.body.email,
      req.body.password,
      req.body.name
    );
  } catch (e) {
    if (e.code === Constants.ErrorCodes.DUPLICATE_ENTRY) {
      apiResponse.error(
        res,
        httpStatusCodes.BAD_REQUEST,
        locale.EMAIL_ALREADY_EXISTS
      );
      return;
    } else if (e.code === Constants.ErrorCodes.X_SCHEMA_VALIDATION) {
      apiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
    }
  }
  if (user) {
    apiResponse.result(res, user, httpStatusCodes.CREATED);
  } else {
    apiResponse.error(res, httpStatusCodes.BAD_REQUEST);
  }
};

const self: IController = async (req, res) => {
  apiResponse.result(res, req.user, httpStatusCodes.OK);
};

export default {
  register,
  self,
};
