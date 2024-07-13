import { createSlice } from "@reduxjs/toolkit";

const items = window.localStorage.getItem("cart");

// Define a type for the slice state

// Define the initial state using that type
const initialState = {
  Items: items ? JSON.parse(items) : [],
};

export const Cart = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItems: (state, action) => {
      // const increaseQuantity = state.Items.findIndex(
      //   (item) => item.id === action.payload.id
      // );

      // if (increaseQuantity >= 0) {
      //   state.value[increaseQuantity].quantity += 1;
      //   window.localStorage.setItem("cart", JSON.stringify(state.value));
      // } else {
      //   const newItem = { ...action.payload, quantity: 1 };
      //   state.value.push(newItem);
      //   window.localStorage.setItem("cart", JSON.stringify(state.value));
      // }
      state.Items.push(action.payload);
    },
  },
});

export const { addItems } = Cart.actions;
// Other code such as selectors can use the imported `RootState` type
export default Cart.reducer;
