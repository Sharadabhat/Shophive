import React from "react";
import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from React Router
import Logo from "../Assets/Images/logo2.png";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Shop", path: "/shop" }
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "white",
        color: "#333",
        py: 6,
        px: { xs: 3, md: 8 },
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Brand Logo and About */}
        <Grid item xs={12} md={4}>
          <img style={{ width: "140px" }} src={Logo} alt="Shophive Logo" />
          <Typography variant="body2" sx={{ mt: 2, color: "#666" }}>
            Welcome to Shophive, your trusted online store for quality products at unbeatable prices. Enjoy a seamless shopping experience with us.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff6600", mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path} // Use Link for navigation
                style={{ textDecoration: "none", color: "inherit" }} // Prevent default styling
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: "#444",
                    fontSize: "16px",
                    transition: "color 0.3s",
                    "&:hover": { color: "#ff6600" },
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff6600", mb: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "#555" }}>
            📍 Shophive HQ, 456 Commerce Road, Market City, India
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "#555" }}>
            📞 +1 987 654 3210
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "18px", color: "#555" }}>
            ✉️ support@shophive.com
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, backgroundColor: "#ddd" }} />

      {/* Copyright Section */}
      <Typography variant="body2" sx={{ color: "#777" }}>
        &copy; {new Date().getFullYear()} Shophive. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;




