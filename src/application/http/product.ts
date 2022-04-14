import {AxiosInstance} from 'axios';
import {Product} from './models/Product';
import {IProductRequet} from './types';

export class ProductRequet implements IProductRequet {
  url = '/products';
  constructor(readonly api: AxiosInstance) {
    this.api = api;
  }

  async getAllCategories(): Promise<string[]> {
    const response = await this.api.get(`${this.url}/categories`);
    return response.data;
  }

  async getAllProducts(): Promise<Product[]> {
    const response = await this.api.get(this.url);
    return response.data;
  }

  async getProductsInCategory(category: string): Promise<Product[]> {
    const response = await this.api.get(`${this.url}/category/${category}`);
    return response.data;
  }
}
