export type ShopGet =
  | {
      name: string;
      address: string;
      latitude: string;
      longitude: string;
    }
  | undefined;

export type MenuGet = {
  name: string;
  price: number;
};

export interface MenuCreate {
  shop_id: number;
  name: string;
  price: number;
}

export interface Owner {
  id?: number;
  name: string;
  password: string;
}

export interface SignUpOwner {
  name: string;
  password: string;
}

export interface ErrorInfo {
  message: string;
}

export interface AuthCheck {
  checked: boolean;
  isAuthenticated: boolean;
}

export interface AllShopGet {
  id: number;
  owner_id: number;
  name: string;
  city: string;
  address: string;
}
