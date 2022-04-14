import {Product} from './models/Product';

export interface IProductRequet {
  getAllProducts(category: string): Promise<Product[]>;
  getAllCategories(): Promise<string[]>;
  getProductsInCategory(category: string): Promise<Product[]>;
}
