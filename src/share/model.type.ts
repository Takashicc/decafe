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
