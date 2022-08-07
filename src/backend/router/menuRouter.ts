import express from "express";
import { MenuRepository } from "../model";
import modelType from "../model.type";

const router = express.Router();

router.post("/menus/new", async (req, res) => {
  try {
    const menus: modelType.MenuCreate[] = req.body;

    const menu_ids: number[] = await MenuRepository.create(menus);
    res.status(200).send({ menu_ids });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

export default router;
