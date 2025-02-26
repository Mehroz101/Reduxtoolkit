import { configureStore } from "@reduxjs/toolkit";
import { AddUserSlice } from "../features/addUserSlice/AddUserSlice";
import { TodoSlice } from "../features/todoSlice/TodoSlice";

export const store = configureStore({
  reducer: {
    user: AddUserSlice.reducer,
    todo: TodoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
