import React from "react";
import { NavData } from "../../constants/data";
import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Main container
const Component = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 65px 10px 0 10px;
  background: #fff;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 65px 5px 0 5px;
  }
`;

// Each item in the navbar
const Container = styled(Box)`
  padding: 12px 18px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  width: 10%; /* Large screen */

  @media (max-width: 960px) {
    width: 25%; /* Medium screen: 4 items */
  }

  @media (max-width: 600px) {
    width: 25%; /* Mobile screen: bhi 4 items */
  }
`;

function Navbar() {
  return (
    <Component>
      {NavData.map((data, index) => (
        <Container key={index}>
          <Link
            to={`/productsPage/${data.category}`}
            key={index}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={data.url} alt="img" style={{ width: 64 }} />
            <Typography style={{ fontSize: 14 }}>{data.text}</Typography>
          </Link>
        </Container>
      ))}
    </Component>
  );
}

export default Navbar;
