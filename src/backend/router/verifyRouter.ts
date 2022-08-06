import express, { CookieOptions } from "express";
import { JwtPayload } from "jsonwebtoken";
import { jwtHelper } from "../helper/jwtHelper";
import modelType from "../model.type";

const router = express.Router();

router.get("/tokenVerification", (req, res) => {
  if (!req.cookies.jwtToken) {
    const authStatus: modelType.AuthStatus = {
      isAuthenticated: false,
    };
    return res.status(200).send(authStatus);
  }

  try {
    const token: string = req.cookies.jwtToken;
    const decode: string | JwtPayload = jwtHelper.verifyToken(token);
    if (!decode) {
      throw new Error();
    }

    const newToken: string = jwtHelper.createToken();
    const cookieOptions: CookieOptions = jwtHelper.getCookieOptions();
    const authStatus: modelType.AuthStatus = {
      isAuthenticated: true,
    };
    res
      .status(200)
      .cookie("jwtToken", newToken, cookieOptions)
      .send(authStatus);
  } catch (error) {
    res.status(500).send();
  }
});

export default router;
