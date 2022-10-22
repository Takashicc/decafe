import express from "express";
import { OwnerRepository } from "../model";
import * as bcrypt from "bcrypt";
import { jwtHelper } from "../helper/JwtHelper";
import { UsernameOrPasswordInvalidError } from "../error/Error";
import * as modelType from "model_type";

interface Login {
  email: string;
  password: string;
}

const router = express.Router();
router.post("/owners/login", async (req, res, next) => {
  try {
    const user: Login = req.body;
    if (!user.email || !user.password) {
      throw new UsernameOrPasswordInvalidError();
    }

    const owner: modelType.Owner | undefined =
      await OwnerRepository.findOwnerByEmail(user.email);
    if (!owner) {
      throw new UsernameOrPasswordInvalidError();
    }

    const match = await bcrypt.compare(user.password, owner.password);
    if (!match) {
      throw new UsernameOrPasswordInvalidError();
    }

    const access_token: string = jwtHelper.createToken(owner.id!);
    res.status(200).send({ access_token });
  } catch (err) {
    next(err);
  }
});

export default router;
