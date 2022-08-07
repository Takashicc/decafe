import express, { CookieOptions } from "express";
import { OwnerRepository } from "../model";
import * as bcrypt from "bcrypt";
import modelType from "../model.type";
import { jwtHelper } from "../helper/jwtHelper";
import { UsernameOrPasswordInvalidError, UserNotFoundError } from "./Errors";

const router = express.Router();
router.post("/owners/login", async (req, res) => {
  try {
    const user: modelType.LoginOwner = req.body;
    if (!user.name || !user.password) {
      throw new UsernameOrPasswordInvalidError();
    }

    const result: modelType.Owner | undefined =
      await OwnerRepository.findOneByName(user.name);
    if (!result) {
      throw new UserNotFoundError();
    }

    const match = await bcrypt.compare(user.password, result.password);
    console.log(match);
    if (!match) {
      throw new UsernameOrPasswordInvalidError();
    }

    const jwtToken: string = jwtHelper.createToken(result.id!);
    const cookieOptions: CookieOptions = jwtHelper.getCookieOptions();

    res.status(200).cookie("jwtToken", jwtToken, cookieOptions).send();
  } catch (error) {
    if (error instanceof UsernameOrPasswordInvalidError) {
      const errorInfo: modelType.ErrorInfo = {
        message: "User name or password is invalid",
      };
      res.status(200).send(errorInfo);
    } else if (error instanceof UserNotFoundError) {
      const errorInfo: modelType.ErrorInfo = {
        message: "User not found",
      };
      res.status(200).send(errorInfo);
    } else {
      res.status(500).send();
    }
  }
});

export default router;
