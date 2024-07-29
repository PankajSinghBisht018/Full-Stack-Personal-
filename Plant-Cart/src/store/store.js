import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slice/cartSlice';
import productsReducer from '../slice/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;

