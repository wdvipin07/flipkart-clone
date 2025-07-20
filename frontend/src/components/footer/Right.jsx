import { styled, Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

// Main container
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 30,
  },
}));

// Each column
const Column = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 200px",
  marginBottom: theme.spacing(4),
  paddingRight: theme.spacing(2),
}));

// Section titles
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#c5b8b8ff",
  marginBottom: theme.spacing(1),
  fontSize: "1rem",
}));

// Text items
const Item = styled(Typography)(({ theme }) => ({
  fontSize: "0.775rem",
  color: "white",
  marginBottom: theme.spacing(0.5),
}));

// Social icons
const SocialBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  flexWrap: "wrap",
  "&>a": {
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1.5),
  },
}));

function Right() {
  return (
    <Container>
      <Column>
        <SectionTitle>Mail us</SectionTitle>
        <Item>Flipkart Internet Private Limited</Item>
        <Item>Buildings Alyssa, Begonia &</Item>
        <Item>Clove Embassy Tech Village</Item>
        <Item>Outer Ring Road, Devarabeesanahalli</Item>
        <Item>Bengaluru, 560103</Item>
        <SocialBox>
          <a
            href="https://www.facebook.com/vipin.chaudhary.615307"
            target="blank"
          >
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/https_vpn_07/" target="blank">
            <InstagramIcon />
          </a>
          <XIcon />
          <YouTubeIcon />
        </SocialBox>
      </Column>

      <Column>
        <SectionTitle>Registered Office</SectionTitle>
        <Item>Flipkart Internet Private Limited</Item>
        <Item>Buildings Alyssa, Begonia &</Item>
        <Item>Clove Embassy Tech Village</Item>
        <Item>Outer Ring Road, Devarabeesanahalli</Item>
        <Item>Bengaluru, 560103</Item>
        <Item>Karnataka, India</Item>
      </Column>
    </Container>
  );
}

export default Right;
