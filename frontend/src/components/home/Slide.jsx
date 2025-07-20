import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Importing the CSS for the carousel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

//style
const Component = styled(Box)`
  margin: 10px;
  background-color: white;
`;

const DealText = styled(Typography)`
  font-size: 25px;
  margin-left: 30px;
  font-weight: bold;
  padding: 12px;
  align-item: center;
  color: ;
`;

const Image = styled("img")(({ theme }) => ({
  width: "auto",
  height: "150px",
  objectFit: "cover",
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

function Slide({ products, title }) {
  return (
    <Component>
      <Box>
        <DealText>{title}</DealText>
      </Box>
      <Carousel
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={false}
        keyBoardControl={true}
        centerMode={false}
        slidesToSlide={2}
      >
        {products.slice(0, 7).map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <Box textAlign="center" style={{ padding: "25px 15px" }}>
              <Image src={product.url} alt="" />
              <Text style={{ fontWeight: 600, color: "#212121" }}>
                {product.title.shortTitle}
              </Text>
              <Text style={{ color: "green" }}>{product.discount} </Text>
              <Text style={{ color: "#212121", opacity: "0.8" }}>
                {product.tagline}
              </Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
}

export default Slide;
