import React, { Component } from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

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

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price = price + item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  //Check Out
  const placeOrder = async () => {
    let data = {
      name: "vipin",
      mobileNumber: "123456789",
      amount: price - discount + 40,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/payments/create-order`,
        data,
        { withCredentials: true }
      );
      console.log(response.data);
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
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
              <StyledBtn onClick={placeOrder}>Place Order</StyledBtn>
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
