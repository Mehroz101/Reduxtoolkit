import { createSlice, nanoid } from "@reduxjs/toolkit";
import { AddUserInterface } from "../../types/type";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState: AddUserInterface[] = [];

export const AddUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddUser: {
      reducer(state, action: PayloadAction<AddUserInterface>) {
        state.push(action.payload);
      },
      prepare(payload: {
        firstname: string;
        lastname: string;
        email: string;
        age: number;
        phone: number;
      }) {
        return {
          payload: {
            ...payload,
            userId: nanoid(),
          },
        };
      },
    },
  },
});

export const { AddUser } = AddUserSlice.actions;

export const selectAllUsers = (state: { user: AddUserInterface[] }) =>
  state.user;

export default AddUserSlice.reducer;
