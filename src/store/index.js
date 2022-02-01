import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

// store
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
