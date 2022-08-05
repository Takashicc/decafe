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
export const findShopById = async (id: number): Promise<modelType.ShopGet> => {
  let shop: modelType.ShopGet;
  try {
    const response = await axios.get<modelType.ShopGet>(`/api/v1/shops/${id}`);
    shop = response.data;
  } catch (error) {
    return shop;
  }
  return shop;
};

/**
 * Get all cities data from shops table.
 *
 * @returns Inserted data id
 */
export const getCities = async (): Promise<modelType.CitiesGet[]> => {
  let cities: modelType.CitiesGet[];
  try {
    const response = await axios.get<modelType.CitiesGet[]>(`/api/v1/cities`);
    cities = response.data;
  } catch (error) {
    throw error;
  }
  return cities;
};
