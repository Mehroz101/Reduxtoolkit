import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/addUserSlice/AddUserSlice";
import { AddUserInterface } from "../types/type";

const ShowUsers = () => {
  const users = useSelector(selectAllUsers);
  console.log(users);
  const renderUsers =
    users &&
    users.map((user: AddUserInterface) => (
      <div
        className="user"
        key={user.userId}
        style={{
          border: "1px solid #999",
          textAlign: "left",
          padding: "10px",
        }}
      >
        <h3>
          {" "}
          {user.firstname} {user.lastname}
        </h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Phone Number: {user.phone}</p>
      </div>
    ));
  return (
    <div>
      <h1>Show Users</h1>
      <div
        className="users"
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        {renderUsers}
      </div>
    </div>
  );
};

export default ShowUsers;
