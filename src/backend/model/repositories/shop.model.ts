import knex from "../knexConfig";
import { TABLE_SHOPS } from "../const";
import modelType from "../../model.type";

/**
 * Insert data into shops table.
 *
 * @param shop Shop object
 * @returns Inserted data id
 */
export async function create(shop: modelType.ShopCreate): Promise<number> {
  let id: number;

  try {
    const rows = await knex(TABLE_SHOPS).insert(shop, "id");
    id = rows[0].id;
  } catch (error) {
    throw error;
  }

  return id;
}

/**
 * Find shop data by id.
 *
 * @param id Shop id
 * @returns Shop data find by id
 */
export async function findShopById(id: number): Promise<modelType.ShopGet> {
  let shop: modelType.ShopGet;

  try {
    shop = await knex
      .select({
        name: `${TABLE_SHOPS}.name`,
        address: `${TABLE_SHOPS}.address`,
        latitude: `${TABLE_SHOPS}.latitude`,
        longtitude: `${TABLE_SHOPS}.longtitude`,
      })
      .from(TABLE_SHOPS)
      .where({
        id,
      })
      .first();
  } catch (error) {
    throw error;
  }

  return shop;
}

/**
 * Get all cities shop data.
 *
 * @returns Shop data find by id
 */
export async function findAllUniqueCities(): Promise<modelType.CitiesGet> {
  let cities: modelType.CitiesGet;

  try {
    cities = await knex
      .select("city")
      .orderBy("city", "asc")
      .distinct()
      .from(TABLE_SHOPS);
  } catch (error) {
    throw error;
  }

  return cities;
}

/**
 * Get all shop data.
 *
 * @returns Shop data find by id
 */
export async function findAllShops(): Promise<modelType.AllShopGet> {
  let allShops: modelType.AllShopGet;

  try {
    allShops = await knex
      .select("id", "name", "city", "address")
      .orderBy("city", "asc")
      .from(TABLE_SHOPS);
  } catch (error) {
    throw error;
  }

  return allShops;
}
