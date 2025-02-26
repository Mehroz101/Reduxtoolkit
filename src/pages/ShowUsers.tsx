import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/addUserSlice/AddUserSlice";
import { AddUserInterface } from "../types/type";
import { Card, CardActionArea, Paper, Typography } from "@mui/material";

const ShowUsers = () => {
  const users = useSelector(selectAllUsers);
  console.log(users);
  const renderUsers =
    users &&
    users.map((user: AddUserInterface) => (
      <Card>
        <CardActionArea>
          <Paper elevation={23} sx={{ padding: "20px" }}>
            <Typography variant="h5">
              {user.firstname} {user.lastname}
            </Typography>{" "}
            {/* <p>Email: {user.email}</p> */}
            <Typography variant="body2">{user.email}</Typography>
            {/* <p>Age: {user.age}</p>
            <p>Phone Number: {user.phone}</p> */}
            <Typography variant="body2">{user.phone}</Typography>
            <Typography variant="body2">{user.age}</Typography>
          </Paper>
        </CardActionArea>
      </Card>
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
