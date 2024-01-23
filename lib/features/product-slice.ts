import { Product } from '@/components/product/product-list';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CartProps = Product & {
	quantity: number;
};
type WishlistProps = Product;

export type ProductStateProps = {
	cart: CartProps[];
	wishlist: WishlistProps[];
};

export const key = 'next-basket';

const initialState = (): ProductStateProps => {
	let storage = null;

	if (typeof window !== 'undefined') {
		storage = window.localStorage.getItem(key);
	}

	return storage
		? (JSON.parse(storage) as ProductStateProps)
		: {
				cart: [],
				wishlist: [],
		  };
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const cartProduct = state.cart.find(
				(product) => product.id === action.payload.id
			);

			if (cartProduct) {
				cartProduct.quantity += 1;
			} else {
				const newCartProduct = {
					...action.payload,
					quantity: 1,
				};
				state.cart.push(newCartProduct);
			}

			localStorage.setItem(key, JSON.stringify(state));
		},
		deleteFromCart: (state, action) => {
			state.cart = state.cart.filter(
				(product) => product.id !== action.payload.id
			);

			localStorage.setItem(key, JSON.stringify(state));
		},
		addProduct: (state, action) => {
			const cartProduct = state.cart.find(
				(product) => product.id === action.payload.id
			);

			if (cartProduct) {
				cartProduct.quantity += 1;
				localStorage.setItem(key, JSON.stringify(state));
			}
		},
		reduceProduct: (state, action) => {
			const cartProduct = state.cart.find(
				(product) => product.id === action.payload.id
			);

			if (cartProduct) {
				cartProduct.quantity -= 1;
				if (cartProduct.quantity === 0) {
					state.cart = state.cart.filter(
						(product) => product.id !== cartProduct.id
					);
				}
				localStorage.setItem(key, JSON.stringify(state));
			}
		},
		addWishlist: (state, action) => {
			const wishProduct = state.wishlist.find(
				(product) => product.id === action.payload.id
			);

			if (!wishProduct) {
				state.wishlist.push(action.payload);
				localStorage.setItem(key, JSON.stringify(state));
			} else {
				state.wishlist = state.wishlist.filter(
					(product) => product.id !== action.payload.id
				);
				localStorage.setItem(key, JSON.stringify(state));
			}
		},
	},
});

export const {
	addToCart,
	addProduct,
	addWishlist,
	deleteFromCart,
	reduceProduct,
} = productSlice.actions;

export const getCartProducts = (
	state: RootState
): ProductStateProps['cart'] => {
	return state.product.cart;
};

export const getWishlistProducts = (
	state: RootState
): ProductStateProps['wishlist'] => {
	return state.product.wishlist;
};

export default productSlice.reducer;
