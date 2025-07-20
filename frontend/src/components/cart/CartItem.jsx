import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { addEllipsis } from "../../utils/common-ellipsis";
import ButtonGroup from "./ButtonGroup";

import { removeFromCart } from "../../redux/action/CartAction";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background-color: white;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SellerText = styled(Typography)`
  color: #878787;
  size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 30px;
  font-size: 16px;
  color: black;
  font-weight: bold;
`;
function CartItem({ item }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Component>
      <LeftComponent>
        <img
          src={item.url}
          alt="Cart Image"
          style={{ height: 110, width: 110 }}
        />
        <ButtonGroup />
      </LeftComponent>
      <Box style={{ marginTop: "20px" }}>
        <Typography> {addEllipsis(item.title.longTitle)} </Typography>
        <SellerText>
          Seller : Retail Net
          <Box component="span">
            <img
              src={fassured}
              style={{ width: "50px", marginLeft: 10 }}
              alt="fassured"
            />
          </Box>
        </SellerText>

        <Typography style={{ marginTop: 20 }}>
          <Box component="span" style={{ fontWeight: "bold", fontSize: 18 }}>
            ₹ {item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388e3c" }}>
            {item.price.discount} 0ff
          </Box>
          &nbsp;&nbsp;&nbsp;
        </Typography>

        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
}

export default CartItem;
