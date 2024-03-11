// src/types/types.ts

export type Product = {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
  };
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };
  