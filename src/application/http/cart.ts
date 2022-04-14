import {AxiosInstance} from 'axios';
import {Product} from './models/Product';

export class CartRequet {
  url = '/products';
  constructor(readonly api: AxiosInstance) {
    this.api = api;
  }

  async getAllProducts(): Promise<Product[]> {
    const response = await this.api.get(this.url);
    return response.data;
  }

  getAllCateries() {}
}
