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
