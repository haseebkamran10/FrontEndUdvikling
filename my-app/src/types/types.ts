// src/types/types.ts

export type Product = {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
  };
  
  /*export type CartItem = {
    product: Product;
    quantity: number;
  };*/
  
  export type CartItem = {
    product: {
      id: number;
      name: string;
      price: number;
      pictureUrl: string; // This should match the Product type definition
    };
    quantity: number;
  };