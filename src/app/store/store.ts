import { configureStore } from '@reduxjs/toolkit';

import { booksApi } from 'app/store/booksApi';

const store = configureStore({
	reducer: {
		[booksApi.reducerPath]: booksApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(booksApi.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
