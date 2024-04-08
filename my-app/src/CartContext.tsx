import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { CartItem } from './types/types'; // Adjust the import path if necessary

interface CartContextState {
  cartItems: CartItem[];
  total: number;
  discount: number;
}

interface CartContextActions {
  setCartItems: (items: CartItem[]) => void;
  handleQuantityChange: (id: number, delta: number) => void;
}

// Create a combined type that includes state and actions
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
  const [cartItems, setCartItemsState] = useState<CartItem[]>([]);

  const setCartItems = useCallback((items: CartItem[]) => {
    setCartItemsState(items);
  }, []);

  const handleQuantityChange = useCallback((id: number, delta: number) => {
    setCartItemsState((currentItems) =>
      currentItems.map((item) =>
        item.product.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
      ),
    );
  }, []);

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  // Example discount calculation
  const discount = total > 300 ? total * 0.1 : 0;

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, handleQuantityChange, total, discount }}>
      {children}
    </CartContext.Provider>
  );
};
