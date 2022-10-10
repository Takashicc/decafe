import knex from "../knexConfig";
import { TABLE_MENUS } from "../const";
import * as modelType from "model_type";

/**
 * Insert data into menus table.
 *
 * @param menus Array of menu object
 * @returns Inserted data id
 */
export async function create(menus: modelType.MenuCreate[]): Promise<number[]> {
  const rows = await knex(TABLE_MENUS).insert(menus, "id");
  let menu_ids: number[] = rows.map((row) => row.id);
  return menu_ids;
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
  let menu: modelType.MenuGet[] = await knex
    .select({
      name: "name",
      price: "price",
    })
    .from(TABLE_MENUS)
    .orderBy("name", "asc")
    .where({
      shop_id: shopid,
    });

  return menu;
}
