import React from "react";
import { useEffect } from "react";
// Home Components
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

// MUI Components
import { Box, styled } from "@mui/material";

import { getProducts } from "../../redux/action/ProductAction";
import { useDispatch, useSelector } from "react-redux";

// Styled Components
const NavComponent = styled(Box)(({ theme }) => ({
  background: "#f2f2f2",
  padding: "10px 10px 0 10px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "35px",
  },
}));

const Container = styled(Box)`
  background: #f2f2f2;
  padding: 15px 10px 15px 10px;
`;

function Home() {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const smartphones = products.filter(
    (product) => product.category === "Smartphones"
  );

  const smartWatches = products.filter(
    (product) => product.category === "Smart Watches"
  );
  const laptops = products.filter((product) => product.category === "Laptops");
  const fashion = products.filter((product) => product.category === "Fashion");
  const headphones = products.filter(
    (product) => product.category === "Headphones"
  );
  const kitchen = products.filter(
    (product) => product.category === "Home & Kitchen"
  );

  return (
    <>
      <NavComponent>
        <Navbar />
      </NavComponent>
      <Container>
        <Banner />
        <MidSlide products={smartphones} title={"Best Deal on Smart Phones"} />
        <Slide products={smartWatches} title={"Discount for you"} />
        <MidSection />
        <Slide products={laptops} title={"Branded Laptops "} />
        <Slide products={fashion} title={"start from only 499"} />
        <MidSection />
        <Slide products={headphones} title={"Headphones & Airbuds "} />
        <Slide products={kitchen} title={"Home and Kitchens "} />
      </Container>
    </>
  );
}

export default Home;
