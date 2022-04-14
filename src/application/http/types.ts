import {Product} from './models/Product';
import {UserCart} from './models/UserCart';

export interface IProductRequet {
  getAllProducts(category: string): Promise<Product[]>;
  getAllCategories(): Promise<string[]>;
  getProductsInCategory(category: string): Promise<Product[]>;
}

export interface ICartRequet {
  getUserCart(): Promise<UserCart>;
  addCart(params: AddCartParams): Promise<void>;
  updateCart(params: any): Promise<void>;
}

type AddCartParams = {
  products: {
    productId: number;
    quantity: number;
  };
};
