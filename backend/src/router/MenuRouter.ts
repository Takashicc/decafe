import express from "express";
import { MenuRepository } from "../model";
import * as modelType from "model_type";

const router = express.Router();

router.post("/menus/new", async (req, res, next) => {
  try {
    const menus: modelType.MenuCreate[] = req.body;
    const menu_ids: number[] = await MenuRepository.create(menus);
    res.status(200).send({ menu_ids });
  } catch (error) {
    next(error);
  }
});

export default router;
