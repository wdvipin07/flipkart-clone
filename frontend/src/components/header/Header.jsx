import React from "react";
import { AppBar, Toolbar, Box, CssBaseline, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
// Importing components
import Search from "./Search";
import CustomerBtn from "./CustomerBtn";

// Styled component for the AppBar
const StyledAppBar = styled(AppBar)`
  background-color: white;
  box-shadow: none;
`;

const Logo = styled("img")(({ theme }) => ({
  marginTop: "5px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "-60px",
    // width: "50%px",
  },
}));

const MenuBar = styled(Menu)(({ theme }) => ({
  color: "black",
  position: "absolute",
  fontSize: "40px",
  display: "none",
}));

function Header() {
  return (
    <div>
      <StyledAppBar>
        <Toolbar>
          <MenuBar />
          <Link to={"/"}>
            <Box>
              <Logo src="/images/logo.svg" alt="Logo" />
            </Box>
          </Link>

          <Search />
          <CustomerBtn />
        </Toolbar>
        <Divider />
      </StyledAppBar>
    </div>
  );
}

export default Header;
