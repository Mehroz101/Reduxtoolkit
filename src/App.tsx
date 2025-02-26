import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import ShowUsers from "./pages/ShowUsers";
import AddNewUser from "./pages/AddUser";
import Todos from "./pages/Todos";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />}>
            <Route index element={<Outlet />} />
            <Route path="/showusers" element={<ShowUsers />} />
            <Route path="/adduser" element={<AddNewUser />} />
            <Route path="/todos" element={<Todos />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
