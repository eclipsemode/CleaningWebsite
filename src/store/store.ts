import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cityReducer from '@store/features/city/locationSlice';
import productsReducer from '@store/features/products/productsSlice';

export const store = configureStore({
  reducer: {
    location: cityReducer,
    product: productsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
