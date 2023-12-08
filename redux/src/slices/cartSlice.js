import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    
  },
  reducers: {
    AddToCart: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
      console.log(state.items);
    },
  },
});

export const { AddToCart } = CartSlice.actions;
export default CartSlice.reducer;
