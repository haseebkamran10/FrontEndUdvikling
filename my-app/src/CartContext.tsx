import React, { createContext, useMemo, useState, useContext, useCallback, useEffect, ReactNode } from 'react';
import { Product, CartItem } from './types/types';

interface CartContextState {
  cartItems: CartItem[];
  total: number;
  discount: number;
}

interface CartContextActions {
  setCartItems: (items: CartItem[]) => void;
  handleQuantityChange: (id: number, delta: number) => void;
  addToCart: (product: Product) => void;
}

type CartContextType = CartContextState & CartContextActions;

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItemsState] = useState<CartItem[]>(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const setCartItems = useCallback((items: CartItem[]) => {
    setCartItemsState(items);
  }, []);

  const handleQuantityChange = useCallback((id: number, delta: number) => {
    setCartItemsState((currentItems) => {
      return currentItems.reduce((accumulatedItems, item) => {
        if (item.product.id === id) {
          const newQuantity = item.quantity + delta;
          if (newQuantity > 0) {
            accumulatedItems.push({ ...item, quantity: newQuantity });
          }
        } else {
          accumulatedItems.push(item);
        }
        return accumulatedItems;
      }, [] as CartItem[]);
    });
  }, []);

  const addToCart = useCallback((product: Product) => {
    setCartItemsState((prevItems) => {
      const foundIndex = prevItems.findIndex(item => item.product.id === product.id);
      if (foundIndex !== -1) {
        const newItems = prevItems.map((item, index) => 
          index === foundIndex ? { ...item, quantity: item.quantity + 1 } : item);
        return newItems;
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  }, []);

  const total = useMemo(() => cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0), [cartItems]);
  const discount = useMemo(() => total > 300 ? total * 0.1 : 0, [total]);

  const value = useMemo(() => ({
    cartItems, setCartItems, handleQuantityChange, addToCart, total, discount
  }), [cartItems, setCartItems, handleQuantityChange, addToCart, total, discount]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
