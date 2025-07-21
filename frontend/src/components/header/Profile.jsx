import { useState, useContext } from "react";
import { Box, MenuItem, Typography, Menu, styled } from "@mui/material";
import axios from "axios";
import { DataContext } from "../../context/DataProvider"; // aapka context path adjust karein
import { toast } from "react-toastify";
const UserAc = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 30px;
`;

const Avatar = styled(Box)`
  width: 30px;
  height: 30px;
  text-align: center;
  position: relative;
  font-size: 0.7rem;
  font-weight: 400;
  color: rgb(221, 139, 221);
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  display: flex;
  background: rgb(252, 229, 252);
  margin-right: 8px;
`;

const UserId = styled(Typography)`
  font-size: 1rem;
  font-weight: 400;
  &:hover {
    color: rgb(223, 91, 43);
  }
`;

function Profile({ account }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { setAccount } = useContext(DataContext); // user context se setAccount le rahe hain

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3000/api/users/logout", {
        withCredentials: true,
      });
      setAccount(""); // user ko logout karna (context update)
      toast.success("Logged Out Successfully");
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout Failed");
    }
  };

  return (
    <>
      <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
        <UserAc>
          {/* <div className="profile"> */}
          <Avatar>ZU</Avatar>
          <UserId>{account.slice(0, 10)}</UserId>
          {/* </div> */}
        </UserAc>
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            handleLogout();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
