import React, { useState } from "react";
import { Box, styled, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/CartAction";
import axios from "axios";
import { toast } from "react-toastify";

const LeftContainer = styled(Box)(({ theme }) => ({
  padding: "40px 0 0 30px",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    padding: "0px 20px",
    justifyContent: "center",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  alignItems: "center",
  width: "85%",
});

const Btn = styled(Button)(({ theme }) => ({
  width: "42%",
  height: "50px",
  borderRadius: "4px",
  marginTop: "10px",
  fontWeight: "bold",
}));

function ActionItem({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
    let data = {
      name: "vipin",
      mobileNumber: "123456789",
      amount: product.price.cost,
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
    <LeftContainer>
      <Box>
        <Image src={product.detailUrl} alt="product" />
      </Box>

      <Box>
        <Btn
          variant="contained"
          style={{ marginRight: "10px", background: "#ff9f00" }}
          onClick={addItemToCart}
        >
          <ShoppingCartIcon />
          Add Cart
        </Btn>

        <Btn
          variant="contained"
          onClick={buyNow}
          style={{ background: "#fb541b" }}
        >
          <FlashOnIcon /> Buy Now
        </Btn>
      </Box>
    </LeftContainer>
  );
}

export default ActionItem;
