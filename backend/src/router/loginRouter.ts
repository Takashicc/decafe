import express, { CookieOptions } from "express";
import { OwnerRepository } from "../model";
import * as bcrypt from "bcrypt";
import { jwtHelper } from "../helper/jwtHelper";
import { UsernameOrPasswordInvalidError } from "./Errors";
import * as modelType from "model_type";

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
      throw new UsernameOrPasswordInvalidError();
    }

    const match = await bcrypt.compare(user.password, result.password);
    console.log(match);
    if (!match) {
      throw new UsernameOrPasswordInvalidError();
    }

    const access_token: string = jwtHelper.createToken(result.id!);
    res.status(200).send({ access_token });
  } catch (error) {
    if (error instanceof UsernameOrPasswordInvalidError) {
      const errorInfo: modelType.ErrorInfo = {
        message: "User name or password is invalid",
      };
      res.status(200).send(errorInfo);
    } else {
      res.status(500).send();
    }
  }
});

export default router;
