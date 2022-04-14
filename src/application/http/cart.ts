import {AsyncStorageStatic} from '@react-native-async-storage/async-storage';
import {CartItem} from './models/CartItem';
import {ICartRequet} from './types';

export class CartRequet implements ICartRequet {
  url = '/carts';
  constructor(readonly repository: AsyncStorageStatic) {
    this.repository = repository;
  }
  async getUserCart(): Promise<CartItem[] | undefined> {
    const response = await this.repository.getItem('@checkout/cart');
    const jsonResponse = JSON.parse(response as string);
    if (jsonResponse.length > 0) {
      return jsonResponse;
    }
    return undefined;
  }

  async saveCart(products: CartItem[]): Promise<void> {
    await this.repository.setItem('@checkout/cart', JSON.stringify(products));
  }
}
