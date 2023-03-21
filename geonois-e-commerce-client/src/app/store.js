import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../api/apiSlice';
import productsSlice from '../features/products/productsSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        product: productsSlice
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store;