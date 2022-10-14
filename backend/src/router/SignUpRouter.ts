import express from "express";
import { OwnerRepository } from "../model";
import bcrypt from "bcrypt";
import { jwtHelper } from "../helper/JwtHelper";
import {
  UserExistsError,
  UsernameOrPasswordInvalidError,
} from "../error/Error";
import * as modelType from "model_type";

const router = express.Router();
router.post("/owners/new", async (req, res, next) => {
  try {
    const user: modelType.SignUpOwner = req.body;
    if (!user.name || !user.password) {
      console.log(user.name, user.password);
      throw new UsernameOrPasswordInvalidError();
    }

    const result = await OwnerRepository.countOwnersByName(user.name);
    if (result > 0) {
      throw new UserExistsError();
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const owner_id = await OwnerRepository.createOwner({
      name: user.name,
      password: hashedPassword,
    });

    const access_token = jwtHelper.createToken(owner_id);
    return res.status(200).send({ access_token });
  } catch (error) {
    next(error);
  }
});

export default router;
