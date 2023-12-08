import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const products = createAsyncThunk("data/serverData", async () => {
  return Axios.get("https://fakestoreapi.com/products").then((res) => {
    return res.data;
  });
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    product1: [],
    loading: false,
  },
  extraReducers: {
    [products.pending]: (state, action) => {
      state.loading = true;
    },
    [products.fulfilled]: (state, action) => {
      state.loading = false;
      state.product1 = action.payload;
    },
    [products.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
