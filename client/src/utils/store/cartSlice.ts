import { createSlice } from "@reduxjs/toolkit";

export type CartItems = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
};

type CartState = {
  items: CartItems[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
