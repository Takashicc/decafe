import express from "express";
import shopRouter from "./shopRouter";
import menuRouter from "./menuRouter";
import loginRouter from "./loginRouter";
import logoutRouter from "./logoutRouter";
import signUpRouter from "./signUpRouter";

const router = express.Router();

router.use(shopRouter);
router.use(menuRouter);
router.use(loginRouter);
router.use(logoutRouter);
router.use(signUpRouter);

export default router;
