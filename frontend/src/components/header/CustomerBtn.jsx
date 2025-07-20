import { useState, useContext } from "react";

import { Box, Button, Typography, Badge } from "@mui/material";
import { styled } from "@mui/material/styles";
// Importing icons
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

// Importing the LoginDialog component
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

import { Link } from "react-router-dom";
// import { cartItems } from "../../redux/action/CartAction";
import { useSelector } from "react-redux";

// Styled component for the customer button wrapper
const CustomerBtnWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  display: "flex",
  alignItems: "center",
  color: "black",
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
    alignItems: "left",
    marginRight: 0,
  },
}));

// Login button component
const LoginBtn = styled(Box)(({ theme }) => ({
  marginLeft: "10px",
  marginRight: "35px",
  padding: "0px 10px",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: "5px",
  transition: "background 0.2s",
  "&:hover": {
    backgroundColor: "rgb(16, 115, 214)",
    color: "white",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 10,
  },
}));

// Cart button component
const CartBtn = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "black",
  marginRight: "35px",
  alignItems: "center",
  marginLeft: "10px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));

// Seller component
const Seller = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: "35px",
  padding: "5px 10px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MoreItems = styled(Box)(({ theme }) => ({
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

function CustomerBtn() {
  // Common icon style
  const iconStyle = { color: "black", fontSize: 26, transition: "color 0.2s" };
  const iconHoverStyle = { color: "white" };

  let [open, setOpen] = useState(false);
  //use for diplay username in the place of login btn
  const { account } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <CustomerBtnWrapper>
      {account ? (
        <Profile account={account} />
      ) : (
        <LoginBtn>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover .user-icon": iconHoverStyle,
            }}
          >
            <AccountCircleIcon className="user-icon" sx={iconStyle} />
            <Button
              sx={{
                width: "100%",
                fontSize: 18,
                color: "black",
                textTransform: "none",
                "&:hover": {
                  color: "white",
                },
              }}
              onClick={() => openDialog()}
            >
              Login
            </Button>
          </Box>
        </LoginBtn>
      )}

      {/* Login BUtton Logic close */}
      <CartBtn to="/cart">
        <Badge badgeContent={cartItems?.length} color={"secondary"}>
          <ShoppingCartOutlinedIcon sx={iconStyle} />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </CartBtn>
      <Seller>
        <StorefrontOutlinedIcon sx={iconStyle} />
        <Typography> &nbsp;Become a Seller</Typography>
      </Seller>
      <MoreItems ml={1}>
        <MoreVertOutlinedIcon
          sx={{ color: "black", fontSize: 30, cursor: "pointer" }}
        />
      </MoreItems>
      <LoginDialog open={open} setOpen={setOpen} />
    </CustomerBtnWrapper>
  );
}

export default CustomerBtn;
