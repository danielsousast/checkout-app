import {AxiosInstance} from 'axios';
import {Product} from './models/Product';
import {IProductRequet} from './types';

export class ProductRequet implements IProductRequet {
  url = '/products';
  constructor(readonly api: AxiosInstance) {
    this.api = api;
  }
  getAllCategories(): void {
    throw new Error('Method not implemented.');
  }

  async getAllProducts(): Promise<Product[]> {
    const response = await this.api.get(this.url);
    return response.data;
  }
}
