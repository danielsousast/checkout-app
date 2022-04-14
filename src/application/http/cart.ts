import {AsyncStorageStatic} from '@react-native-async-storage/async-storage';
import {CartItem, ICartRequet} from './types';

export class CartRequet implements ICartRequet {
  url = '/carts';
  constructor(readonly repository: AsyncStorageStatic) {
    this.repository = repository;
  }
  async getUserCart(): Promise<any> {
    const response = await this.repository.getItem('@checkout/cart');
    if (response) {
      return JSON.stringify(response);
    }
    return [];
  }

  async saveCart(products: CartItem[]): Promise<void> {
    await this.repository.setItem('@checkout/cart', JSON.stringify(products));
  }
}
