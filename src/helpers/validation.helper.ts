import { validate, ValidationError } from 'class-validator';
import Constants from '../constants';

/**
 * Verify password hash
 * @param {any} schema
 * @param {boolean} skipMissingProperties
 */
interface IValidatorResponse {
  code: string;
  message: string;
}
export const validator = async (
  schema: any,
  skipMissingProperties: boolean = false
): Promise<IValidatorResponse> =>
  new Promise((resolve) => {
    validate(schema, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors
            .map((error: ValidationError) => Object.values(error.constraints))
            .join(', ');
          resolve({ code: Constants.ErrorCodes.X_SCHEMA_VALIDATION, message });
        } else {
          resolve(null);
        }
      }
    );
  });
