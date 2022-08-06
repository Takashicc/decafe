import express from "express";
import { jwtHelper } from "../helper/jwtHelper";

const router = express.Router();
router.post("/owners/logout", (req, res) => {
  try {
    const cookieOptions = jwtHelper.getCookieOptions();
    return res.status(200).cookie("jwtToken", "", cookieOptions).send();
  } catch (error) {
    return res.status(500).send();
  }
});

export default router;
