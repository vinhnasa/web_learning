import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});