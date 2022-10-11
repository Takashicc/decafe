import express from "express";
import shopRouter from "./ShopRouter";
import menuRouter from "./MenuRouter";
import loginRouter from "./LoginRouter";
import signUpRouter from "./SignUpRouter";

const router = express.Router();

router.use(shopRouter);
router.use(menuRouter);
router.use(loginRouter);
router.use(signUpRouter);

export default router;
