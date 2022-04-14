/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import {CartRequet} from '../http/cart';
import {CartItem} from '../http/types';

interface CartContext {
  itens: CartItem[];
  addToCart(item: Omit<CartItem, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({children}) => {
  const cartRequest = new CartRequet(AsyncStorage);
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    async function loadCartProducts(): Promise<void> {
      const storagedCartProducts = await cartRequest.getUserCart();

      if (storagedCartProducts) {
        setCartProducts([...storagedCartProducts]);
      }
    }

    loadCartProducts();
  }, []);

  const addToCart = useCallback(async product => {
    const productExists = cartProducts?.find(item => item.id === product.id);

    if (productExists) {
      setCartProducts(
        cartProducts?.map(item =>
          item.id === product.id
            ? {...product, quantity: item.quantity + 1}
            : item,
        ),
      );
    } else {
      setCartProducts([...cartProducts, {...product, quantity: 1}]);
    }

    await cartRequest.saveCart(cartProducts);
  }, []);

  const increment = useCallback(async productId => {
    const newProducts = cartProducts.map(product =>
      product.id === productId
        ? {...product, quantity: product.quantity + 1}
        : product,
    );

    setCartProducts(newProducts);

    await cartRequest.saveCart(cartProducts);
  }, []);

  const decrement = useCallback(async (productId: number) => {
    const newProducts = cartProducts.map(product =>
      product.id === productId
        ? {...product, quantity: product.quantity - 1}
        : product,
    );

    setCartProducts(newProducts);

    await cartRequest.saveCart(cartProducts);
  }, []);

  const value = React.useMemo(
    () => ({addToCart, increment, decrement, cartProducts}),
    [cartProducts, addToCart, increment, decrement],
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
