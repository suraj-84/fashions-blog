import React from "react";
import {
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Facebook, Instagram, Menu, Twitter } from "@mui/icons-material/";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Products", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];
  return (
    <AppBar sx={{ background: "black" }}>
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
        </SocialBox>
        <MenuBox sx={{display:{xs:"none",sm:"none",md:"flex"}}}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer", fontSize: "15px" }}>
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase
            placeholder="Search..."
            sx={{ color: "whitesmoke" }}
          />
          <Menu sx={{color:"white", display:{xs:"block",sm:"block",md:"none"}}}/>

        </SearchBox>
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar;
