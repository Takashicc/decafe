import express from "express";
import { MenuRepository, ShopRepository } from "../model";
import isNumeric from "validator/lib/isNumeric";
import * as modelType from "model_type";
import { verifyToken } from "../middleware/Auth";

const router = express.Router();

router.get("/shops", async (req, res, next) => {
  try {
    let shops: modelType.AllShopGet = await ShopRepository.findAllShops();
    return res.status(200).send(shops);
  } catch (error) {
    next(error);
  }
});

router.post("/shops/new", verifyToken, async (req, res, next) => {
  try {
    const shop: modelType.ShopCreate = req.body;
    await ShopRepository.createShop(shop);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
});

router.get("/shops/:id", async (req, res, next) => {
  try {
    let shopAndMenu: modelType.ShopAndMenu;
    let shop: modelType.ShopGet;
    let menus: modelType.MenuGet[];
    if (!isNumeric(req.params.id)) {
      res.status(400).send();
      return;
    }

    // Get the shop by id
    // Get the menus by shop id
    // Store the shop and menus to shopAndMenu variable

    const id: number = +req.params.id;
    shop = await ShopRepository.findShopById(id);
    menus = await MenuRepository.findMenusByShopId(id);
    shopAndMenu = { shop, menus };

    return res.status(200).send(shopAndMenu);
  } catch (error) {
    next(error);
  }
});

router.get("/cities", async (req, res, next) => {
  try {
    let cities: modelType.CitiesGet =
      await ShopRepository.findAllUniqueCities();
    return res.status(200).send(cities);
  } catch (error) {
    next(error);
  }
});

export default router;
