import {createSelector} from 'reselect';
import {ProductsInitialState} from './reducers';

export type AppState = {
  product: ProductsInitialState;
};

const appState = (state: AppState) => state?.product;

export const getProductsSelector = createSelector(
  appState,
  state => state?.products,
);

export const getProductsMetada = createSelector(appState, state => ({
  loading: state?.loading,
  error: state?.error,
}));
