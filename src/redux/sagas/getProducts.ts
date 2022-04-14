import {put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {ProductRequet} from '../../http/product';
import api from '../../services/axios';
import {productsSlice} from '../reducers';

export function* getProductsSaga({}: PayloadAction<any>): unknown {
  try {
    const httpRequest = new ProductRequet(api);
    const response = yield httpRequest.getAllProducts();
    const factory = response;

    yield put(productsSlice.actions.getProductsSuccess(factory));
  } catch (error: any) {
    yield put(productsSlice.actions.getProductsError());
  }
}
