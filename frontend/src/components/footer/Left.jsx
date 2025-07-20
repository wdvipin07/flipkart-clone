import { Typography, Box, styled } from "@mui/material";

// Container styles
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  //   paddingTop: theme.spacing(5),
  flexWrap: "wrap",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: "none",
  },
}));

// Each column
const Column = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 150,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    width: "100%", // Full width on smaller devices
    marginBottom: theme.spacing(2),
    marginLeft: 30,
  },
}));

// Section title
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#c5b8b8ff",
  marginBottom: theme.spacing(1),
  fontSize: "1rem",
}));

// Link style
const LinkItem = styled(Typography)(({ theme }) => ({
  fontSize: "0.775rem",
  color: "white",
  flexWrap: "wrap",
  marginBottom: theme.spacing(0.5),
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function Left() {
  return (
    <Container>
      <Column>
        <SectionTitle>About</SectionTitle>
        <LinkItem>Contact Us</LinkItem>
        <LinkItem>About Us</LinkItem>
        <LinkItem>Carrier</LinkItem>
        <LinkItem>Flipkart Stories</LinkItem>
        <LinkItem>Press</LinkItem>
        <LinkItem>Corporate Information</LinkItem>
      </Column>

      <Column>
        <SectionTitle> Companies</SectionTitle>
        <LinkItem>Mytra</LinkItem>
        <LinkItem>Cleartrip</LinkItem>
        <LinkItem>Shopsy</LinkItem>
      </Column>

      <Column>
        <SectionTitle>Help</SectionTitle>
        <LinkItem>Payments</LinkItem>
        <LinkItem>Shipping</LinkItem>
        <LinkItem>Cancellation</LinkItem>
        <LinkItem>FAQ</LinkItem>
      </Column>

      <Column>
        <SectionTitle>Consumer</SectionTitle>
        <LinkItem>Cancellation</LinkItem>
        <LinkItem>Terms of Use</LinkItem>
        <LinkItem>Security</LinkItem>
        <LinkItem>Privacy</LinkItem>
        <LinkItem>Sitemap</LinkItem>
        <LinkItem>Grievance Redressal</LinkItem>
        <LinkItem>EPR Compliance</LinkItem>
      </Column>
    </Container>
  );
}

export default Left;
