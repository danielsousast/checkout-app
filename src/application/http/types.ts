import {Product} from './models/Product';
import {UserCart} from './models/UserCart';

export interface IProductRequet {
  getAllProducts(category: string): Promise<Product[]>;
  getAllCategories(): Promise<string[]>;
  getProductsInCategory(category: string): Promise<Product[]>;
}

export interface ICartRequet {
  getUserCart(): Promise<UserCart>;
  saveCart(params: CartItem[]): Promise<void>;
}

export interface CartItem extends Product {
  quantity: number;
}
