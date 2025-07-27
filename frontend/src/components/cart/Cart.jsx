import React, { Component } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { Box, styled, Grid, Typography, Button } from "@mui/material";

//components
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: 60,
  [theme.breakpoints.down("sm")]: {
    marginTop: 100,
  },
}));

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 100px",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 8px",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: white;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background-color: white;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledBtn = styled(Button)`
  display: flex;
  margin-left: auto;
  background-color: #fb641b;
  color: white;
  width: 220px;
  height: 41px;
  border-radius: 2px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: "15px",
  },
}));

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  //Check Out
  const buyNow = async () => {
    let data = {
      name: "vipin",
      mobileNumber: "123456789",
      amount: 100,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/create-order`,
        data,
        { withCredentials: true }
      );
      console.log(response.data);
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {cartItems.length > 0 ? (
        <Container container>
          <LeftComponent size={{ lg: 8, md: 8, sm: 12, xs: 12 }}>
            <Header>
              <Typography>My Cart ({cartItems.length}) </Typography>
            </Header>

            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}

            <ButtonWrapper>
              <StyledBtn onClick={() => buyNow()}>Place Order</StyledBtn>
            </ButtonWrapper>
          </LeftComponent>
          <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </Wrapper>
  );
}

export default Cart;
