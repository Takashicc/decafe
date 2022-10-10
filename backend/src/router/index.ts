import express from "express";
import shopRouter from "./shopRouter";
import menuRouter from "./menuRouter";
import loginRouter from "./loginRouter";
import signUpRouter from "./signUpRouter";

const router = express.Router();

router.use(shopRouter);
router.use(menuRouter);
router.use(loginRouter);
router.use(signUpRouter);

export default router;
