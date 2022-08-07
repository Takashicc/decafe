import express from "express";
import { ShopRepository } from "../model";
import modelType from "../model.type";
import isNumeric from "validator/lib/isNumeric";

const router = express.Router();

// TODO not tested
// router.post("/shops", async (req, res) => {
//   try {
//     const { owner_id, name, address } = req.body;

//     const shop: modelType.ShopCreate = {
//       owner_id,
//       name,
//       address,
//     };
//     const id = await ShopRepository.createShop(shop);

//     return res.status(200).send(id);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send();
//   }
// });

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

router.get("/shops/:id", async (req, res) => {
  let shop: modelType.ShopGet;
  try {
    if (!isNumeric(req.params.id)) {
      res.status(400).send();
      return;
    }

    const id: number = +req.params.id;
    shop = await ShopRepository.findShopById(id);
  } catch (error) {
    console.log(error);
    res.status(500).send();
    return;
  }

  return res.status(200).send(shop);
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
