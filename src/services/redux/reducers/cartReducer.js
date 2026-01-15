import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const item = state.items.find((i) => i.id === product.id);

      if (item) {
        item.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      state.totalQty++;
      state.totalPrice += product.price;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);

      if (!item) return;

      state.totalQty -= item.qty;
      state.totalPrice -= item.qty * item.price;
      state.items = state.items.filter((i) => i.id !== id);
    },

    clearCart(state) {
      state.items = [];
      state.totalQty = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
 