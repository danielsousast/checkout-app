import {AxiosInstance} from 'axios';
import {ICartRequet} from './types';

export class CartRequet implements ICartRequet {
  url = '/carts';
  constructor(readonly api: AxiosInstance) {
    this.api = api;
  }
  async getUserCart(): Promise<any> {
    const response = await this.api.get(`${this.url}/user/2`);
    return response.data;
  }

  async addCart(params: any): Promise<void> {
    await this.api.post(`${this.url}/user/${params.userId}`, {
      userId: params.userId,
      date: params.date,
      products: params.products,
    });
  }

  async updateCart(params: any): Promise<void> {
    await this.api.patch(`${this.url}/${params.cartId}`, {
      userId: params.userId,
      date: params.date,
      products: params.products,
    });
  }
}
