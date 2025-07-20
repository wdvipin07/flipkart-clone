import { Box, styled, Grid } from "@mui/material";

// Components
import Left from "./Left";
import Right from "./Right";
import FooterEnd from "./FooterEnd";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#2d2c2c",
  color: "white",
  padding: theme.spacing(4, 2),
  overflowX: "hidden",
}));

function Footer() {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid size={{ lg: 7, md: 7, sm: 12, xs: 12 }}>
          <Left />
        </Grid>
        <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
          <Right />
        </Grid>
      </Grid>
      <FooterEnd />
    </Wrapper>
  );
}

export default Footer;
