import axios from "axios";
import modelType from "../model.type";

/**
 * Insert data into shops table.
 *
 * @param shop Shop object
 * @returns Inserted data id
 */
export const createShop = async (
  shop: modelType.ShopCreate
): Promise<number> => {
  let id: number;
  try {
    const response = await axios.post<number>(`/api/v1/shops`, shop);
    id = response.data;
  } catch (error) {
    throw error;
  }

  return id;
};

/**
 * Find shop by id.
 *
 * @param id shop id
 * @returns Shop data find by id
 */
export const findShopAndMenuById = async (
  id: number
): Promise<modelType.ShopAndMenu> => {
  let shop: modelType.ShopAndMenu;
  try {
    const response = await axios.get<modelType.ShopAndMenu>(
      `/api/v1/shops/${id}`
    );
    shop = response.data;
  } catch (error) {
    return shop;
  }
  return shop;
};
