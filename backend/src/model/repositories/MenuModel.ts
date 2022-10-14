import knex from "../KnexConfig";
import { TABLE_MENUS } from "../const";
import * as modelType from "model_type";

/**
 * Create menu data.
 *
 * @param menus Array of menu object.
 */
export async function createMenu(menus: modelType.MenuCreate[]) {
  await knex(TABLE_MENUS).insert(menus, "id");
}

/**
 * Find menus by shop id.
 *
 * @param shopId Shop id.
 * @returns Array of shop menus.
 */
export async function findMenusByShopId(
  shopId: number
): Promise<modelType.MenuGet[]> {
  let menu: modelType.MenuGet[] = await knex
    .select({
      name: "name",
      price: "price",
    })
    .from(TABLE_MENUS)
    .orderBy("name", "asc")
    .where({
      shop_id: shopId,
    });

  return menu;
}
