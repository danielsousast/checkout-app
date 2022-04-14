import {put} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {ProductRequet} from '../../http/product';
import api from '../../../services/axios';
import {productsSlice} from '../reducers';
import {DEFAULT_CATEGORY} from '../../../constants';

export function* getProductsSaga({payload}: PayloadAction<any>): unknown {
  try {
    const httpRequest = new ProductRequet(api);
    let response;

    if (payload === DEFAULT_CATEGORY) {
      response = yield httpRequest.getAllProducts();
    } else {
      response = yield httpRequest.getProductsInCategory(payload);
    }

    yield put(productsSlice.actions.getProductsSuccess(response));
  } catch (error: any) {
    yield put(productsSlice.actions.getProductsError());
  }
}
