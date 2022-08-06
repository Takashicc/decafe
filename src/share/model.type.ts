export type ShopGet =
  | {
      name: string;
      address: string;
      latitude: string;
      longtitude: string;
    }
  | undefined;

export type MenuGet = {
  name: string;
  price: number;
};

export interface ShopCreate {
  owner_id: number;
  name: string;
  address: string;
}

export type ShopAndMenu =
  | {
      shop: ShopGet;
      menus: MenuGet[];
    }
  | undefined;

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
