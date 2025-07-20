import { Box, styled, Typography } from "@mui/material";
import {
  StorefrontOutlined,
  AutoGraph,
  HelpOutlineOutlined,
  StoreOutlined,
} from "@mui/icons-material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(5),
  paddingTop: theme.spacing(2),
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#ccc",
  fontSize: "0.675rem",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(1.5),
  },

  "& > *": {
    cursor: "pointer",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#fff",
    },
  },
}));

function FooterEnd() {
  return (
    <Container>
      <Typography>
        <StorefrontOutlined style={{ color: "yellow", fontSize: 15 }} />
        Become a Seller
      </Typography>
      <Typography>
        <AutoGraph style={{ color: "yellow", fontSize: 15 }} />
        Advertise
      </Typography>
      <Typography>
        <StoreOutlined style={{ color: "yellow", fontSize: 15 }} /> Gift Cards
      </Typography>
      <Typography>
        <HelpOutlineOutlined style={{ color: "yellow", fontSize: 15 }} /> Help
        Center
      </Typography>
      <Typography>© 2007-2025 Flipkart.com</Typography>
      <Box>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
          alt="Payment Methods"
          width="100%"
        />
      </Box>
    </Container>
  );
}

export default FooterEnd;
