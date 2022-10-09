abstract class BaseError extends Error {
  constructor(s?: string) {
    super(s);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class UsernameOrPasswordInvalidError extends BaseError {}

export class UserNotFoundError extends BaseError {}

export class UserExistsError extends BaseError {}

export class HashFailedError extends BaseError {}
