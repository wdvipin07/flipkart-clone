import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  height: "65vh",
  width: "80%",
  margin: "80px 140px",
  backgroundColor: "white",
  [theme.breakpoints.down("md")]: {
    margin: "80px 40px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 120,
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

function EmptyCart() {
  const imgUrl =
    "https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <Component>
      <Container>
        <img src={imgUrl} alt="Emptycart img" style={{ width: "15%" }} />
        <Typography>Your Cart is empty</Typography>
        <Typography>Add Items to it now</Typography>
      </Container>
    </Component>
  );
}

export default EmptyCart;
