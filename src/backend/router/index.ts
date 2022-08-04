import express from "express";
import shopRouter from "./shopRouter";

const router = express.Router();

router.use(shopRouter);

export default router;
