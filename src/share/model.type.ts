export type ShopGet =
  | {
      name: string;
      address: string;
    }
  | undefined;

export interface ShopCreate {
  owner_id: number;
  name: string;
  address: string;
}

export interface CitiesGet {
  city: string;
}

export interface AllShopGet {
  id: number;
  owner_id: number;
  name: string;
  city: string;
  address: string;
}
