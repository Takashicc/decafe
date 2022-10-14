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
