import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../slices/demoSlice";
import cartSlicereduser from "../slices/cartSlice";
export const store = configureStore({
  reducer: {
    product: productreducer,
    cart : cartSlicereduser,
  },
});
