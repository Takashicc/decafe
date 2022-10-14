import express from "express";
import { MenuRepository } from "../model";
import * as modelType from "model_type";

const router = express.Router();

router.post("/menus/new", async (req, res, next) => {
  try {
    const menus: modelType.MenuCreate[] = req.body;
    await MenuRepository.createMenu(menus);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
});

export default router;
