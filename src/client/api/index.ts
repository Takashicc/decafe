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
  let shop_id: number;
  try {
    const response = await axios.post<{ shop_id: number }>(
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
    const response = await axios.post<number[]>(`/api/v1/menus/new`, menus);
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
    const response = await axios.get<modelType.AllShopGet[]>(`/api/v1/shops`);
    shops = response.data;
  } catch (error) {
    throw error;
  }
  return shops;
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

/**
 * Get all cities data from shops table.
 *
 * @returns All cities
 */
export const findAllUniqueCities = async (): Promise<modelType.CitiesGet[]> => {
  let cities: modelType.CitiesGet[];
  try {
    const response = await axios.get<modelType.CitiesGet[]>(`/api/v1/cities`);
    cities = response.data;
  } catch (error) {
    throw error;
  }
  return cities;
};

/**
 * Send data to the server and verify the owner user exist.
 *
 * @param user User object
 * @returns ErrorInfo object
 */
export const ownerLogin = async (
  user: modelType.LoginOwner
): Promise<modelType.ErrorInfo> => {
  const response = await axios.post<modelType.ErrorInfo>(
    "/api/v1/owners/login",
    user
  );

  return response.data;
};

/**
 * Owner logout.
 */
export const ownerLogout = async (): Promise<void> => {
  await axios.post("/api/v1/owners/logout");
  return;
};

/**
 * Send data to the server and sign up a new owner user.
 *
 * @param user User object
 * @returns ErrorInfo object
 */
export const ownersSignUp = async (
  user: modelType.SignUpOwner
): Promise<modelType.ErrorInfo> => {
  const response = await axios.post<modelType.ErrorInfo>(
    "/api/v1/owners/new",
    user
  );

  return response.data;
};

/**
 * Verify the JsonWebToken and check is authenticated or not.
 *
 * @returns Authenticated or not
 */
export const jwtIsAuthenticated = async (): Promise<boolean> => {
  const response = await axios.get<modelType.AuthStatus>(
    "/api/v1/tokenVerification"
  );

  return response.data.isAuthenticated;
};

/**
 * Get owner id from decoded cookie.
 *
 * @returns Owner id
 */
export const decodeOwnerId = async (): Promise<number> => {
  const response = await axios.get("/api/v1/cookie/id");

  return response.data.owner_id;
};
