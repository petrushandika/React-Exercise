import { createSlice } from "@reduxjs/toolkit";

const parseRupiah = (price) => {
  return parseInt(price.replace(/\./g, ""), 10);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const updatedCartList = state.cartList.concat(action.payload);
      const total = state.total + parseRupiah(action.payload.price);
      return { ...state, total: total, cartList: updatedCartList };
    },
    remove(state, action) {
      const updatedCartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const total = state.total - parseRupiah(action.payload.price);
      return { ...state, total: total, cartList: updatedCartList };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
