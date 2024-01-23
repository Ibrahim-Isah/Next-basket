import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/product-slice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			product: productSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
