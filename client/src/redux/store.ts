import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Reducers/cart";
import  Preview  from "./Reducers/preview";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    preview: Preview,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
