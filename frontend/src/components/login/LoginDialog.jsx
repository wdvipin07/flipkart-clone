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
// import { Snackbar, Alert } from "@mui/material";
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
  padding: "25px 35px",
  flex: 1,
  gap: "20px",

  "& > div": {
    marginTop: "10px",
  },
  "& > button": {
    marginTop: "10px",
  },
  "& > p": {
    marginTop: "10px",
  },

  [theme.breakpoints.down("sm")]: {
    "& > div": { marginTop: "10px" },
    "& > p": { marginTop: "0px" },
    "& > button": { marginTop: "5px" },
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

//this object for toggleing form value
let accountInitialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup with you mobile get started",
  },
};

//object for signup
const signupInitialValue = {
  username: "",
  email: "",
  mobile: "",
  password: "",
};

//object for signup
const loginInitialValue = {
  email: "",
  password: "",
};

//login Dailog Render function
function LoginDialog({ open, setOpen }) {
  //state for viewing the login form
  let [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const { setAccount } = useContext(DataContext);
  const [shouldCloseDialog, setShouldCloseDialog] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };

  //login form
  const loginChange = (e) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  //function for the Onchange
  const inputChange = (e) => {
    e.preventDefault();
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async (signup) => {
    try {
      await axios.post("http://localhost:3000/signup", signup, {
        withCredentials: true,
      });

      setSignup(signupInitialValue); // clear form
      setShouldCloseDialog(true);
      setAccount(signup.username);
      //message
      toast.success(response.message, {
        onClose: () => {
          setOpen(false);
          toggleAccount(accountInitialValue.login);
        },
      });
    } catch (err) {
      toast.error(
        err.response?.data?.message || err.message || "Signup Failed"
      );
    }
  };

  const loginUser = async () => {
    try {
      await axios.post("http://localhost:3000/login", login, {
        withCredentials: true,
      });
      setShouldCloseDialog(true);
      setAccount(login.username);
      //message
      toast.success("User Login Successfully", {
        onClose: () => {
          setOpen(false);
          toggleAccount(accountInitialValue.login);
        },
      });
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || "Login Failed");
    }
  };

  return (
    <>
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
                onChange={(e) => loginChange(e)}
                label=" Username"
              />
              <TextField
                variant="standard"
                name="password"
                onChange={(e) => loginChange(e)}
                label="Password"
              />

              <LoginBtn onClick={() => loginUser(login)}>Login</LoginBtn>
              <Typography style={{ textAlign: "center" }}>Or</Typography>

              <RequestBtn>Request Otp</RequestBtn>

              <Text onClick={() => toggleSignup()}>
                New to flipkart? Create Account
              </Text>
            </RightContainer>
          ) : (
            <RightContainer>
              <TextField
                variant="standard"
                name="username"
                onChange={(e) => inputChange(e)}
                label="Username "
              />
              <TextField
                variant="standard"
                name="email"
                onChange={(e) => inputChange(e)}
                label="Email"
              />
              <TextField
                variant="standard"
                name="mobile"
                onChange={(e) => inputChange(e)}
                label="Mobile"
              />
              <TextField
                variant="standard"
                name="password"
                onChange={(e) => inputChange(e)}
                label=" Password"
              />

              <LoginBtn onClick={() => signupUser(signup)}>Continue</LoginBtn>
            </RightContainer>
          )}
        </Container>
      </Dialog>
    </>
  );
}

export default LoginDialog;
