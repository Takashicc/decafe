import { Request, Response, NextFunction } from "express";
import { jwtHelper } from "../helper/jwtHelper";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.json({ message: "Authorization header missing" });
    return;
  }

  const splitAuthHeader = authHeader.split(" ");
  if (splitAuthHeader.length !== 2 || splitAuthHeader[0] !== "Bearer") {
    res.json({ message: "Authorization header format invalid" });
    return;
  }

  try {
    const payload = jwtHelper.verifyToken(splitAuthHeader[1]);
    // TODO Check payload.owner_id exists in database.
  } catch (e) {
    res.json({ message: "Access token invalid" });
    return;
  }

  next();
}
