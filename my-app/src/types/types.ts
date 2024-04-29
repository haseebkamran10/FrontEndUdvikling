// src/types/types.ts

export type Product = {
    id: number;
    name: string;
    price: number;
    image_url: string;
  };
  
  export type CartItem = {
    product: {
      id: number;
      name: string;
      price: number;
      image_url: string; 
    };
    quantity: number;
  };