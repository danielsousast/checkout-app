import {all, takeLatest} from 'redux-saga/effects';
import {productsSlice} from '../reducers';
import {getProductsSaga} from './getProducts';

export default function* root(): any {
  yield all([
    yield takeLatest(productsSlice.actions.getProductsRequest, getProductsSaga),
  ]);
}
