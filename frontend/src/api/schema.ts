export interface Auth {
  access_token?: string;
  message?: string;
}

export interface ShopAndMenus {
  shop: {
    name: string;
    longitude: number;
    latitude: number;
    address: string;
  };
  menus: {
    name: string;
    price: number;
  }[];
}

export interface CityOnly {
  city: string;
}

export interface ShopIdOnly {
  shopId: number;
}

export interface ShopCreate {
  name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}
