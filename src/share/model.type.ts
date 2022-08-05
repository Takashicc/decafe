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

export interface Owner {
  name: string;
  password: string;
}

export interface LoginOwner {
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
