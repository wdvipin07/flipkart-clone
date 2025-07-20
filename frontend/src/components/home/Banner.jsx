import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BannerData } from "../../constants/data";
import { Box, styled } from "@mui/material";

// Importing the CSS for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BannerComponent = styled(Carousel)`
  margin: 0px 10px;
`;

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 180,
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 180,
  },
}));

function Banner() {
  return (
    <BannerComponent
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      swipeable={false}
      draggable={false}
    >
      {BannerData.map((data) => (
        <Image src={data.url} alt="banner" width={"100%"} height={"180px"} />
      ))}
    </BannerComponent>
  );
}

export default Banner;
