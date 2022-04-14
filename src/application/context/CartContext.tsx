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
import {Product} from '../http/models/Product';
import {CartItem} from '../http/types';

interface CartContext {
  cartProducts: CartItem[];
  addToCart(item: Omit<CartItem, 'quantity'>): void;
  increment(id: number): void;
  decrement(id: number): void;
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

  const addToCart = useCallback(
    async (product: Product) => {
      const productExists = cartProducts?.find(item => item.id === product.id);

      if (productExists) {
        const newCartProducts = cartProducts?.map(item => {
          if (item.id === product.id) {
            return {...product, quantity: item.quantity + 1};
          }
          return item;
        });
        setCartProducts(newCartProducts);
      } else {
        setCartProducts([...cartProducts, {...product, quantity: 1}]);
      }

      await cartRequest.saveCart(cartProducts);
    },
    [cartProducts],
  );

  const increment = useCallback(
    async productId => {
      const newProducts = cartProducts.map(product =>
        product.id === productId
          ? {...product, quantity: product.quantity + 1}
          : product,
      );

      setCartProducts(newProducts);

      await cartRequest.saveCart(cartProducts);
    },
    [cartProducts],
  );

  const decrement = useCallback(
    async (productId: number) => {
      const newProducts = cartProducts.map(product => {
        if (!(product.id === productId)) return product;
        return {...product, quantity: product.quantity - 1};
      });
      const filteredProducts = newProducts.filter(item => item.quantity > 0);
      setCartProducts(filteredProducts);
      await cartRequest.saveCart(filteredProducts);
    },
    [cartProducts],
  );

  const value = React.useMemo(
    () => ({addToCart, increment, decrement, cartProducts}),
    [cartProducts, addToCart, increment, decrement],
  );

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
