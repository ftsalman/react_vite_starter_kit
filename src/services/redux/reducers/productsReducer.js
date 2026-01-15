import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "idle",
  },
  reducers: {
    setProducts(state, action) {
      state.list = action.payload;
      state.status = "success";
    },
    loadingProducts(state) {
      state.status = "loading";
    },
  },
});

export const { setProducts, loadingProducts } = productsSlice.actions;

export default productsSlice.reducer;
