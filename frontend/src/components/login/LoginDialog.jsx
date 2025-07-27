import React from "react";
import { useState, useContext } from "react";
import {
  Box,
  styled,
  Dialog,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import { DataContext } from "../../context/DataProvider";
import axios from "axios";
import { toast } from "react-toastify";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "70vh",
  width: "50vw",
  [theme.breakpoints.down("md")]: {
    width: "80vw",
  },
}));

const LeftContainer = styled(Box)(({ theme }) => ({
  background:
    "#2874f0 url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat",
  width: "35%",
  height: "100%",
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const TextLogin = styled(Typography)`
  font-size: 16px;
  display: block;
  color: white;
`;

const RightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "15px 35px",
  flex: 1,
  // gap: "0px",
  "& > div": { marginTop: "10px" },
  "& > button": { marginTop: "10px" },
  "& > p": { marginTop: "10px" },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 20px",
  },
}));

const LoginBtn = styled(Button)`
  background-color: #fb641b;
  color: white;
  font-weight: bold;
  text-transform: none;
`;

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "bold",
  textAlign: "center",
  color: "#2874f0",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    fontWeight: "normal",
  },
}));

const RequestBtn = styled(Button)`
  text-transform: none;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
  font-weight: bold;
`;

const accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup with your mobile to get started",
  },
};

const StyledHelperText = styled(Typography)({
  color: "red",
  fontSize: "12px",
  minHeight: "18px",
  marginTop: "2px",
  fontFamily: "monospace",
});

const signupInitialValue = {
  username: "",
  email: "",
  mobile: "",
  password: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};

function LoginDialog({ open, setOpen }) {
  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const { setAccount, fetchUser } = useContext(DataContext);
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    setOpen(false);
    setLogin(loginInitialValue);
    setSignup(signupInitialValue);
    toggleAccount(accountInitialValue.login);
    setErrors({});
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };

  const loginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    let errorMsg = "";

    switch (name) {
      case "username":
        if (value.trim() === "") errorMsg = "Username is required";
        break;
      case "email":
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value))
          errorMsg = "Enter a valid email";
        break;
      case "mobile":
        if (!/^\d{0,10}$/.test(value)) {
          errorMsg = "Only digits allowed";
        } else if (value.length === 10) {
          errorMsg = "";
        }
        break;
      case "password":
        if (value.length < 6)
          errorMsg = "Password must be at least 6 characters";
        break;
      default:
        break;
    }

    setSignup({ ...signup, [name]: value });
    setErrors({ ...errors, [name]: errorMsg });
  };

  const validateAllFields = () => {
    let tempErrors = {};
    if (signup.username.trim() === "")
      tempErrors.username = "Username is required";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(signup.email))
      tempErrors.email = "Enter a valid email";
    if (!/^\d{10}$/.test(signup.mobile))
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    if (signup.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const signupUser = async () => {
    if (!validateAllFields()) return;

    try {
      const API = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${API}/api/users/signup`, signup, {
        withCredentials: true,
      });

      setSignup(signupInitialValue);
      await fetchUser();
      setAccount(signup.username); // UI instantly update ho
      setOpen(false);
      toggleAccount(accountInitialValue.login);
      toast.success("User Registered successfully");
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Signup Failed"
      );
    }
  };

  const loginUser = async () => {
    try {
      const API = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${API}/api/users/login`, login, {
        withCredentials: true,
      });
      await fetchUser();
      setOpen(false);
      toggleAccount(accountInitialValue.login);
      toast.success("User Login Successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || "Login Failed");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Container>
        <LeftContainer>
          <h2 style={{ color: "white" }}>{account.heading}</h2>
          <TextLogin>{account.subHeading}</TextLogin>
        </LeftContainer>

        {account.view === "login" ? (
          <RightContainer>
            <TextField
              variant="standard"
              name="username"
              value={login.username}
              onChange={loginChange}
              label="Username"
              style={{ marginBottom: 15 }}
            />
            <TextField
              variant="standard"
              name="password"
              value={login.password}
              onChange={loginChange}
              label="Password"
              style={{ marginBottom: 25 }}
            />
            <LoginBtn onClick={loginUser}>Login</LoginBtn>
            <Typography style={{ textAlign: "center" }}>Or</Typography>
            <RequestBtn>Request Otp</RequestBtn>
            <Text onClick={toggleSignup} style={{ marginTop: 25 }}>
              New to flipkart? Create Account
            </Text>
          </RightContainer>
        ) : (
          <RightContainer>
            <TextField
              variant="standard"
              name="username"
              label="Username"
              value={signup.username}
              onChange={inputChange}
              error={!!errors.username}
              helperText={
                <StyledHelperText>{errors.username} </StyledHelperText>
              }
            />
            <TextField
              variant="standard"
              name="email"
              label="Email"
              value={signup.email}
              onChange={inputChange}
              error={!!errors.email}
              helperText={<StyledHelperText>{errors.email} </StyledHelperText>}
            />
            <TextField
              variant="standard"
              name="mobile"
              label="Mobile"
              value={signup.mobile}
              onChange={inputChange}
              error={!!errors.mobile}
              helperText={<StyledHelperText>{errors.mobile} </StyledHelperText>}
              inputProps={{ maxLength: 10 }}
            />
            <TextField
              variant="standard"
              name="password"
              label="Password"
              value={signup.password}
              onChange={inputChange}
              error={!!errors.password}
              helperText={
                <StyledHelperText>{errors.password} </StyledHelperText>
              }
            />
            <LoginBtn onClick={signupUser}>Continue</LoginBtn>
          </RightContainer>
        )}
      </Container>
    </Dialog>
  );
}

export default LoginDialog;
