import express, { CookieOptions } from "express";
import { OwnerRepository } from "../model";
import modelType from "../model.type";
import bcrypt from "bcrypt";
import { jwtHelper } from "../helper/jwtHelper";
import {
  HashFailedError,
  UserExistsError,
  UsernameOrPasswordInvalidError,
} from "./Errors";

const router = express.Router();
router.post("/owners/new", async (req, res) => {
  try {
    const user: modelType.SignUpOwner = req.body;
    if (!user.name || !user.password) {
      console.log(user.name, user.password);
      throw new UsernameOrPasswordInvalidError();
    }

    const result = await OwnerRepository.countRecordByName(user.name);
    if (result > 0) {
      throw new UserExistsError();
    }

    const hashPassword = await bcrypt.hash(user.password, 10);
    if (!hashPassword) {
      throw new HashFailedError();
    }

    const owner_id = await OwnerRepository.create({
      name: user.name,
      password: hashPassword,
    });

    const jwtToken = jwtHelper.createToken(owner_id);
    const cookieOptions: CookieOptions = jwtHelper.getCookieOptions();
    return res.status(200).cookie("jwtToken", jwtToken, cookieOptions).send();
  } catch (error) {
    if (error instanceof UsernameOrPasswordInvalidError) {
      const errorInfo: modelType.ErrorInfo = {
        message: "User name or password is invalid",
      };
      res.status(200).send(errorInfo);
    } else if (error instanceof UserExistsError) {
      const errorInfo: modelType.ErrorInfo = {
        message: "User exists",
      };
      res.status(200).send(errorInfo);
    } else {
      console.log(error);
      res.status(500).send();
    }
  }
});

export default router;
