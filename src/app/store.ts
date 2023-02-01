import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { fetchApi } from '../features/counter/productsApiSlice';
import cartSlice from '../features/counter/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [fetchApi.reducerPath]: fetchApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
