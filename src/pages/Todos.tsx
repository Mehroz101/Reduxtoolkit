import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../features/todoSlice/TodoSlice";
import { AppDispatch } from "../store/store";
import { Button } from "@mui/material";
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
      <Button variant="contained" onClick={() => dispatch(fetchTodos())}>
        Fetch
      </Button>
      {todos && todos.map((todo) => <h2>{todo.title}</h2>)}
    </div>
  );
};

export default Todos;
