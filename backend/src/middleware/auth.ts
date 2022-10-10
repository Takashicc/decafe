import { AuthorizationHeaderError } from "../error/Error";
import { Request, Response, NextFunction } from "express";
import { jwtHelper } from "../helper/jwtHelper";
import { StatusCodes } from "http-status-codes";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    throw new AuthorizationHeaderError({
      message: "Authorization header missing",
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }

  const splitAuthHeader = authHeader.split(" ");
  if (splitAuthHeader.length !== 2 || splitAuthHeader[0] !== "Bearer") {
    throw new AuthorizationHeaderError({
      message: "Authorization header format invalid",
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }

  const payload = jwtHelper.verifyToken(splitAuthHeader[1]);
  // TODO Check payload.owner_id exists in database.

  next();
}
