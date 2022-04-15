import {CartItem} from './models/CartItem';
import {Product} from './models/Product';

export interface IProductRequet {
  getAllProducts(category: string): Promise<Product[] | undefined>;
  getAllCategories(): Promise<string[] | undefined>;
  getProductsInCategory(category: string): Promise<Product[] | undefined>;
}

export interface ICartRequet {
  getUserCart(): Promise<CartItem[] | undefined>;
  saveCart(params: CartItem[]): Promise<void>;
}
