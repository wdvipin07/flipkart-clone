import React from "react";
import Slide from "./Slide";

import { Box, styled } from "@mui/material";

const imgUrl =
  "https://rukminim2.flixcart.com/fk-p-flap/1060/1620/image/c1b2d38a68c48c63.jpeg?q=60";

const Components = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "79%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "19%",
  padding: 5,
  paddingBottom: 3,
  marginTop: 10,
  marginLeft: 12,
  marginBottom: 12,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

function MidSlide({ products, title }) {
  return (
    <Components>
      <LeftComponent>
        <Slide products={products} title={title} />
      </LeftComponent>
      <RightComponent>
        <img src={imgUrl} alt="ad" style={{ width: "96%" }} />
      </RightComponent>
    </Components>
  );
}

export default MidSlide;
