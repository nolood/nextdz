// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: Array<{
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
  }>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        id: 1,
        code: null,
        price: 200,
        old_price: null,
        purchase_price: null,
        wholesale_price: null,
        quantity: null,
        weight: null,
        size: null,
        product_id: 1,
        created_at: "2023-01-31T13:10:47.000000Z",
        updated_at: "2023-01-31T13:10:47.000000Z",
        images: [
          {
            id: 3,
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg/1280px-Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg",
            product_id: 1,
            variant_id: 1,
            created_at: "2023-01-31T13:10:46.000000Z",
            updated_at: "2023-01-31T13:11:38.000000Z",
          },
        ],
      },
      {
        id: 2,
        code: null,
        price: 3000,
        old_price: null,
        purchase_price: null,
        wholesale_price: null,
        quantity: null,
        weight: null,
        size: null,
        product_id: 1,
        created_at: "2023-01-31T13:12:02.000000Z",
        updated_at: "2023-01-31T13:12:02.000000Z",
        images: [
          {
            id: 2,
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg/1280px-Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg",
            product_id: 1,
            variant_id: 2,
            created_at: "2023-01-31T13:10:46.000000Z",
            updated_at: "2023-01-31T13:12:19.000000Z",
          },
        ],
      },
      {
        id: 3,
        code: null,
        price: 8000,
        old_price: null,
        purchase_price: null,
        wholesale_price: null,
        quantity: null,
        weight: null,
        size: null,
        product_id: 1,
        created_at: "2023-02-01T12:35:24.000000Z",
        updated_at: "2023-02-01T12:35:24.000000Z",

        images: [
          {
            id: 1,
            path: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg/1280px-Kazimir_Malevich%2C_1915%2C_Black_Suprematic_Square%2C_oil_on_linen_canvas%2C_79.5_x_79.5_cm%2C_Tretyakov_Gallery%2C_Moscow.jpg",
            product_id: 1,
            variant_id: 3,
            created_at: "2023-01-31T13:10:46.000000Z",
            updated_at: "2023-02-01T12:35:42.000000Z",
          },
        ],
      },
    ],
  });
}
