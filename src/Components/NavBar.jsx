import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/logo2.png";

const pages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Shop", path: "/shop" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={1} sx={{ backgroundColor: "white", p: 1}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <img style={{ width: "80px", color: "black" }} src={Logo} alt="logo" />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img style={{ width: "80px", color: "black" }} src={Logo} alt="logo" />
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton size="large" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page, index) => (
                <MenuItem component={Link} to={page.path} key={index} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center", fontFamily: '"Poppins", sans-serif' }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end", gap: 3 }}>
            {pages.map((page, index) => (
              <Button
                component={Link}
                to={page.path}
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#353543",
                  display: "block",
                  fontWeight: "600",
                  fontSize: "16px",
                  fontFamily: '"Poppins", sans-serif',
                  textTransform: "capitalize",
                  border: "2px solid transparent",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    borderColor: "#353543",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
