import api from "lib/axios_settings";
import * as modelType from "model_type";
import * as schema from "api/schema";

/**
 * Insert data into shops table.
 *
 * @param shop Shop object
 * @returns Inserted data id
 */
export const createShop = async (
  shop: modelType.ShopCreate
): Promise<number> => {
  let shop_id: number;
  try {
    const response = await api.post<{ shop_id: number }>(
      `/api/v1/shops/new`,
      shop
    );
    shop_id = response.data.shop_id;
  } catch (error) {
    throw error;
  }

  return shop_id;
};

/**
 *
 * @param menus Array of menu object
 * @returns Array of inserted menu id
 */
export const createMenus = async (
  menus: modelType.MenuCreate[]
): Promise<number[]> => {
  let menu_ids: number[];
  try {
    const response = await api.post<number[]>(`/api/v1/menus/new`, menus);
    menu_ids = response.data;
  } catch (error) {
    throw error;
  }

  return menu_ids;
};

/**
 * Get all shop data from shops table.
 *
 * @returns All shop data
 */
export const findAllShops = async (): Promise<modelType.AllShopGet[]> => {
  let shops: modelType.AllShopGet[];
  try {
    const response = await api.get<modelType.AllShopGet[]>(`/api/v1/shops`);
    shops = response.data;
  } catch (error) {
    throw error;
  }
  return shops;
};

/**
 * Find shop and menus by shop id.
 *
 * @param shopId Shop id.
 * @returns Shop and menus.
 */
export const findShopAndMenusByShopId = async (
  shopId: number
): Promise<schema.ShopAndMenus> => {
  const response = await api.get<schema.ShopAndMenus>(
    `/api/v1/shops/${shopId}`
  );
  return response.data;
};

/**
 * Get all unique cities.
 *
 * @returns All unique cities.
 */
export const findAllUniqueCities = async (): Promise<schema.CityOnly[]> => {
  const response = await api.get<schema.CityOnly[]>(`/api/v1/cities`);
  return response.data;
};

/**
 * Send data to the server and verify the owner user exist.
 *
 * @param user User object
 * @returns ErrorInfo object
 */
export const ownerLogin = async (
  user: modelType.LoginOwner
): Promise<schema.Auth> => {
  const response = await api.post<schema.Auth>("/api/v1/owners/login", user);

  return response.data;
};

/**
 * Send data to the server and sign up a new owner user.
 *
 * @param user User object
 * @returns ErrorInfo object
 */
export const ownersSignUp = async (
  user: modelType.SignUpOwner
): Promise<schema.Auth> => {
  const response = await api.post<schema.Auth>("/api/v1/owners/new", user);

  return response.data;
};
