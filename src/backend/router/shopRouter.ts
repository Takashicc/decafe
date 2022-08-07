import express from "express";
import { MenuRepository, ShopRepository } from "../model";
import modelType from "../model.type";
import isNumeric from "validator/lib/isNumeric";

const router = express.Router();

router.get("/shops", async (req, res) => {
  let shops: modelType.AllShopGet;
  try {
    shops = await ShopRepository.findAllShops();
  } catch (error) {
    console.log(error);
    res.status(500).send();
    return;
  }

  return res.status(200).send(shops);
});

router.post("/shops/new", async (req, res) => {
  try {
    const shop: modelType.ShopCreate = req.body;

    const shop_id: number = await ShopRepository.create(shop);
    res.status(200).send({ shop_id });
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

router.get("/shops/:id", async (req, res) => {
  let shopAndMenu: modelType.ShopAndMenu;
  let shop: modelType.ShopGet;
  let menus: modelType.MenuGet[];
  try {
    if (!isNumeric(req.params.id)) {
      res.status(400).send();
      return;
    }

    // Get the shop by id
    // Get the menus by shop id
    // Store the shop and menus to shopAndMenu varibale

    const id: number = +req.params.id;
    shop = await ShopRepository.findShopById(id);
    menus = await MenuRepository.findMenuByShopId(id);
    shopAndMenu = { shop, menus };
  } catch (error) {
    console.log(error);
    res.status(500).send();
    return;
  }

  return res.status(200).send(shopAndMenu);
});

router.get("/cities", async (req, res) => {
  let cities: modelType.CitiesGet;
  try {
    cities = await ShopRepository.findAllUniqueCities();
  } catch (error) {
    console.log(error);
    res.status(500).send();
    return;
  }

  return res.status(200).send(cities);
});

export default router;
