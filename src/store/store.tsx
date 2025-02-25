import { configureStore } from "@reduxjs/toolkit";
import { AddUserSlice } from "../features/addUserSlice/AddUserSlice";

export const store = configureStore({
  reducer: {
    user: AddUserSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
