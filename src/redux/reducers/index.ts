import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../http/models/Product';

export interface ProductsInitialState {
  loading: boolean;
  error: boolean;
  products: Product[] | null;
}

const initialState: ProductsInitialState = {
  loading: false,
  error: false,
  products: null,
};

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductsRequest: state => {
      state.loading = true;
    },
    getProductsSuccess: (state, {payload}: PayloadAction<any>) => {
      state.products = payload;
      state.loading = false;
    },
    getProductsError: state => {
      state.error = true;
      state.loading = false;
    },
    getCategoriesRequest: (state, _action: PayloadAction<any>) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, {payload}: PayloadAction<any>) => {
      state.products = payload;
      state.loading = false;
    },
    getCategoriesError: state => {
      state.error = true;
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;
