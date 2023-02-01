// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductCart } from "../../interfaces/product";

interface CartState {
    items: ProductCart[];
}

const storageString = localStorage.getItem('cart');
const storageItens = storageString ? JSON.parse(storageString) : [];

const initialState: CartState = {
    items: storageItens,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductCart>) => {
            const existingProductIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (existingProductIndex >= 0) {
                state.items[existingProductIndex].quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.items.map(item => item)))

        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const existingProductIndex = state.items.findIndex((item) => item.id === action.payload);
            if (existingProductIndex >= 0) {
                const existingProduct = state.items[existingProductIndex];
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    state.items.splice(existingProductIndex, 1);
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.items.map(item => item)))
        },
        addQuantity: (state, action: PayloadAction<number>) => {
            const existingProductIndex = state.items.findIndex((item) => item.id === action.payload);
            if (existingProductIndex >= 0) {
                state.items[existingProductIndex].quantity += 1;
            }
            localStorage.setItem('cart', JSON.stringify(state.items.map(item => item)))
        },
        excludeProduct: (state, action: PayloadAction<number>) => {
            const existingProductIndex = state.items.findIndex((item) => item.id === action.payload);
            if (existingProductIndex >= 0) {
                state.items.splice(existingProductIndex, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state.items.map(item => item)))
        },

    }
},
);

export const { addToCart, removeFromCart, addQuantity, excludeProduct } = cartSlice.actions;
export default cartSlice.reducer;