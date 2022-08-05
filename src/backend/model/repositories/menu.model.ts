import knex from "../knexConfig";
import { TABLE_MENUS } from "../const";
import modelType from "../../model.type";

/**
 * Insert data into shops table.
 *
 * @param shop Shop object
 * @returns Inserted data id
 */
export async function createShop(shop: modelType.ShopCreate): Promise<number> {
  let id: number;

  try {
    const rows = await knex(TABLE_MENUS).insert(shop, "id");
    id = rows[0].id;
  } catch (error) {
    throw error;
  }

  return id;
}

/**
 * Find menu data by shop id.
 *
 * @param id shop id
 * @returns shop menu find by shop id
 */
export async function findMenuByShopId(
  shopid: number
): Promise<modelType.MenuGet[]> {
  let menu: modelType.MenuGet[];

  try {
    menu = await knex
      .select({
        name: "name",
        price: "price",
      })
      .from(TABLE_MENUS)
      .where({
        shop_id: shopid,
      });
  } catch (error) {
    throw error;
  }

  return menu;
}
