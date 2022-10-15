import knex from "../KnexConfig";
import { TABLE_SHOPS } from "../const";
import * as modelType from "model_type";
import { ShopCreate } from "schemas/ShopSchema";

/**
 * Create new shop.
 *
 * @param owner_id: Owner id.
 * @param shop Shop object.
 * @returns Created shop id.
 */
export async function createShop(owner_id: number, shop: ShopCreate) {
  const result = await knex(TABLE_SHOPS)
    .insert({ owner_id, ...shop })
    .returning("id");

  return result[0].id;
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
