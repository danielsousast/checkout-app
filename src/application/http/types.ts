import {CartItem} from './models/CartItem';
import {Product} from './models/Product';

export interface IProductRequet {
  getAllProducts(category: string): Promise<Product[]>;
  getAllCategories(): Promise<string[]>;
  getProductsInCategory(category: string): Promise<Product[]>;
}

export interface ICartRequet {
  getUserCart(): Promise<CartItem[] | undefined>;
  saveCart(params: CartItem[]): Promise<void>;
}
