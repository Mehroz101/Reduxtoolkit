import { SubmitHandler, useForm } from "react-hook-form";
import { AddUserInterface } from "../types/type";
import { useDispatch } from "react-redux";
import { AddUser } from "../features/addUserSlice/AddUserSlice";
const AddNewUser = () => {
  const dispatch = useDispatch();
  const method = useForm<AddUserInterface>();
  const submitFunction: SubmitHandler<AddUserInterface> = (data) => {
    console.log(data);
    dispatch(AddUser(data));
  };
  return (
    <div>
      <div className="adduserform">
        <form
          onSubmit={method.handleSubmit(submitFunction)}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #999",
            }}
            type="text"
            {...method.register("firstname", { required: true })}
            placeholder="Enter Your First Name"
          />
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #999",
            }}
            type="text"
            {...method.register("lastname", { required: true })}
            placeholder="Enter Your Last Name"
          />
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #999",
            }}
            type="email"
            {...method.register("email", { required: true })}
            placeholder="Enter Your Email"
          />
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #999",
            }}
            type="number"
            {...method.register("age", { required: true })}
            placeholder="Enter Your Age"
          />
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #999",
            }}
            type="number"
            {...method.register("phone", { required: true })}
            placeholder="Enter Your Phone Number"
          />
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #999",
            }}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
