import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// https://jsonplaceholder.typicode.com/todos
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});

interface TodoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface initialState {
  loading: boolean;
  data: TodoInterface[];
  error: string;
}

const initialState: initialState = {
  loading: false,
  data: [],
  error: "",
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default TodoSlice.reducer;
