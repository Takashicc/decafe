import knex from "../KnexConfig";
import { TABLE_SHOPS } from "../const";
import * as modelType from "model_type";

/**
 * Create shop data.
 *
 * @param shop Shop object.
 */
export async function createShop(shop: modelType.ShopCreate) {
  await knex(TABLE_SHOPS).insert(shop, "id");
}

/**
 * Find shop by shop id.
 *
 * @param id Shop id
 * @returns Shop object.
 */
export async function findShopById(id: number): Promise<modelType.ShopGet> {
  let shop: modelType.ShopGet = await knex
    .select({
      name: `${TABLE_SHOPS}.name`,
      address: `${TABLE_SHOPS}.address`,
      latitude: `${TABLE_SHOPS}.latitude`,
      longitude: `${TABLE_SHOPS}.longitude`,
    })
    .from(TABLE_SHOPS)
    .where({
      id,
    })
    .first();

  return shop;
}

/**
 * Find all unique cities.
 *
 * @returns Unique cities.
 */
export async function findAllUniqueCities(): Promise<modelType.CitiesGet> {
  let cities: modelType.CitiesGet = await knex
    .select("city")
    .orderBy("city", "asc")
    .distinct()
    .from(TABLE_SHOPS);

  return cities;
}

/**
 * Find all shops.
 *
 * @returns Array of shops.
 */
export async function findAllShops(): Promise<modelType.AllShopGet> {
  let allShops: modelType.AllShopGet = await knex
    .select("id", "name", "city", "address")
    .orderBy("city", "asc")
    .from(TABLE_SHOPS);

  return allShops;
}
