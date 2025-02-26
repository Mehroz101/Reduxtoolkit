import { SubmitHandler, useForm } from "react-hook-form";
import { AddUserInterface } from "../types/type";
import { useDispatch } from "react-redux";
import { AddUser } from "../features/addUserSlice/AddUserSlice";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const StyledButton = styled(Button)({
  padding: "32px",
  backgroundColor: "hotpink",
  fontSize: "24px",
  borderRadius: "4px",
});

const AddNewUser = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
          {/* <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl> */}
          <TextField
            required
            id="outlined-required"
            label="First Name"
            type="text"
            defaultValue=""
            {...method.register("firstname", { required: true })}
          />
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            type="text"
            defaultValue=""
            {...method.register("lastname", { required: true })}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            type="email"
            defaultValue=""
            {...method.register("email", { required: true })}
          />
          <TextField
            required
            id="outlined-required"
            label="Age"
            type="number"
            defaultValue=""
            {...method.register("age", { required: true })}
          />
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            type="number"
            defaultValue=""
            {...method.register("phone", { required: true })}
          />
          <TextField
            select
            id="outlined-required"
            label="Gender"
            type="text"
            defaultValue="female"
            {...method.register("gender", { required: true })}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>

          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
