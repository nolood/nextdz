export interface IItem {
  id: number;
  code: null | string;
  price: number;
  purchase_price: null;
  old_price: null;
  wholesale_price: null;
  quantity: null;
  weight: null;
  size: null;
  product_id: number;
  created_at: string;
  updated_at: string;
  images: Array<{
    id: number;
    path: string;
    product_id: number;
    variant_id: number;
    created_at: string;
    updated_at: string;
  }>;
}
