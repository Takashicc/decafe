import express, { CookieOptions } from "express";
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
    const decode = jwtHelper.verifyToken(token);
    if (!decode) {
      throw new Error();
    }

    const newToken: string = jwtHelper.createToken(decode.owner_id);
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

router.get("/cookie/id", (req, res) => {
  try {
    if (!req.cookies.jwtToken) {
      throw new Error();
    }

    const token: string = req.cookies.jwtToken;
    const decode = jwtHelper.verifyToken(token);
    if (!decode?.owner_id) {
      throw new Error();
    }

    const owner_id = decode.owner_id;
    return res.status(200).send({ owner_id });
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
});

export default router;
