import knex from "../knexConfig";
import { TABLE_SHOPS } from "../const";
import * as modelType from "model_type";

/**
 * Insert data into shops table.
 *
 * @param shop Shop object
 * @returns Inserted data id
 */
export async function create(shop: modelType.ShopCreate): Promise<number> {
  const rows = await knex(TABLE_SHOPS).insert(shop, "id");
  let id: number = rows[0].id;
  return id;
}

/**
 * Find shop data by id.
 *
 * @param id Shop id
 * @returns Shop data find by id
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
 * Get all cities shop data.
 *
 * @returns Shop data find by id
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
 * Get all shop data.
 *
 * @returns Shop data find by id
 */
export async function findAllShops(): Promise<modelType.AllShopGet> {
  let allShops: modelType.AllShopGet = await knex
    .select("id", "name", "city", "address")
    .orderBy("city", "asc")
    .from(TABLE_SHOPS);

  return allShops;
}
