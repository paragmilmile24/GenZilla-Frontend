import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const currItem = {
                title: product?.title,
                key: product?.key,
                price: product?.price,
                image: product?.image.url,
            };
            const index = state.cart.findIndex(
                (item) => item.key === currItem.key
            );
            if (index === -1) {
                state.cart.push({ ...currItem, quantity: 1 });
            } else {
                state.cart[index].quantity += 1;
            }
        },
        removeFromCart: (state, action) => {
            const currItem = action.payload;
            const index = state.cart.findIndex(
                (item) => item.key === currItem.key
            );

            if (index === -1) {
                // console.log("Item not found in cart");
                return;
            }
            if (state.cart[index].quantity === 1) {
                state.cart = state.cart.filter(
                    (item) => item.key !== currItem.key
                );
            } else {
                state.cart[index].quantity -= 1;
            }
        },
        removeItem: (state, action) => {
            const currItem = action.payload;
            const index = state.cart.findIndex(
                (item) => item.key === currItem.key
            );
            if (index === -1) {
                // console.log("Item not found in cart");
                return;
            }
            state.cart = state.cart.filter((item) => item.key !== currItem.key);
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, removeItem } = cartSlice.actions;
