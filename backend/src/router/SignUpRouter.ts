import express from "express";
import { OwnerRepository } from "../model";
import bcrypt from "bcrypt";
import { jwtHelper } from "../helper/JwtHelper";
import {
  UserExistsError,
  UsernameOrPasswordInvalidError,
} from "../error/Error";

interface SignUp {
  name: string;
  email: string;
  password: string;
}

const router = express.Router();
router.post("/owners/new", async (req, res, next) => {
  try {
    const user: SignUp = req.body;
    if (!user.name || !user.email || !user.password) {
      throw new UsernameOrPasswordInvalidError();
    }

    const count = await OwnerRepository.countOwnersByEmail(user.email);
    if (count > 0) {
      throw new UserExistsError();
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const owner_id = await OwnerRepository.createOwner({
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });

    const access_token = jwtHelper.createToken(owner_id);
    return res.status(200).send({ access_token });
  } catch (error) {
    next(error);
  }
});

export default router;
