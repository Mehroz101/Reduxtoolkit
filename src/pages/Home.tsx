import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="navbar" style={{ display: "flex", gap: "20px" }}>
        <Link to={"/"}>
          <h3>Home</h3>
        </Link>
        <Link to={"/adduser"}>
          <h3>Add New User</h3>
        </Link>
        <Link to={"/showusers"}>
          <h3>Show Users</h3>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
