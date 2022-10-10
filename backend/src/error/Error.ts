import { StatusCodes } from "http-status-codes";

interface AppErrorArgs {
  message: string;
  name?: string;
  statusCode: StatusCodes;
  isOperational?: boolean;
}

export abstract class AppError extends Error {
  public readonly name: string;
  public readonly statusCode: StatusCodes;
  public readonly isOperational: boolean;

  constructor(args: AppErrorArgs) {
    super(args.message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = args.name || "Error";
    this.statusCode = args.statusCode;
    this.isOperational = args.isOperational || true;

    Error.captureStackTrace(this);
  }
}

export class UsernameOrPasswordInvalidError extends AppError {
  constructor() {
    super({
      message: "User name or password is invalid",
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }
}

export class UserExistsError extends AppError {
  constructor() {
    super({
      message: "User exists",
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }
}

export class AccessTokenInvalidError extends AppError {
  constructor() {
    super({
      message: "Access token invalid",
      statusCode: StatusCodes.FORBIDDEN,
    });
  }
}

export class AuthorizationHeaderError extends AppError {}
