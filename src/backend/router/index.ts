import express from "express";
import verifyRouter from "./verifyRouter";
import shopRouter from "./shopRouter";
import loginRouter from "./loginRouter";
import logoutRouter from "./logoutRouter";
import signUpRouter from "./signUpRoter";

const router = express.Router();

router.use(verifyRouter);
router.use(shopRouter);
router.use(loginRouter);
router.use(logoutRouter);
router.use(signUpRouter);

export default router;
