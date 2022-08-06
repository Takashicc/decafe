import knex from "../knexConfig";
import { TABLE_MENUS } from "../const";
import modelType from "../../model.type";

// /**
//  * ToDo:
//  * Insert menu into menus table.
//  *
//  * @param shop Menu object
//  * @returns Inserted data id
//  */
//
// }

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
      .orderBy("name", "asc")
      .where({
        shop_id: shopid,
      });
  } catch (error) {
    throw error;
  }

  return menu;
}
