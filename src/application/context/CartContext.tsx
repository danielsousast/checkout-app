import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import {Product} from '../http/models/Product';
import {UserCart} from '../http/models/UserCart';

interface CartItem extends Product {
  quantity: number;
}

interface CartContext {
  itens: CartItem[];
  addToCart(item: Omit<CartItem, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({children}) => {
  const [cardProducts] = useState<UserCart>();

  useEffect(() => {
    async function loadCartProducts(): Promise<void> {}

    loadCartProducts();
  }, []);

  const addToCart = useCallback(async () => {}, []);

  const increment = useCallback(async () => {}, []);

  const decrement = useCallback(async () => {}, []);

  const value = React.useMemo(
    () => ({addToCart, increment, decrement, cardProducts}),
    [cardProducts, addToCart, increment, decrement],
  );
  //@ts-ignore
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export {CartProvider, useCart};
