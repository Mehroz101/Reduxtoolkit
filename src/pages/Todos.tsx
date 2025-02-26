import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todoSlice/TodoSlice";
import { AppDispatch } from "../store/store";
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
const Todos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: { todo: initialState }) => state.todo.data);
  return (
    <div>
      <h1>TODOS</h1>
      <button onClick={() => dispatch(fetchTodos())}>Fetch</button>
      {todos && todos.map((todo) => <h2>{todo.title}</h2>)}
    </div>
  );
};

export default Todos;
