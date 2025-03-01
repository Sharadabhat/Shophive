import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../Assets/Images/bg10.jpg";

export default function Hero() {
  const navigate = useNavigate(); 
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(3px)",
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(41, 38, 38, 0.2), rgba(0,0,0,0.7))",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Typography
        sx={{
          fontWeight: "900",
          fontSize: { xs: "50px", sm: "80px", md: "100px" },
          textTransform: "uppercase",
          color: "white",
          lineHeight: 1.2,
        }}
        gutterBottom
      >
        Welcome to<br />
        ShopHive
      </Typography>

      <Typography
        gutterBottom
        sx={{ fontWeight: "700", fontSize: "22px", color: "white", opacity: 0.9 }}
      >
        Where Quality Meets Convenience
      </Typography>

      <Typography
        gutterBottom
        sx={{ width: { xs: "90%", sm: "70%" }, fontWeight: "500", color: "white", opacity: 0.8 }}
      >
        Explore a world of top-notch products, exclusive discounts, and seamless shopping at ShopHive.
        From the latest gadgets to stylish apparel and home essentials—everything you need, all in one place!
      </Typography>


      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          px: 4,
          py: 1,
          fontSize: "18px",
          fontWeight: "700",
          textTransform: "uppercase",
          backgroundColor: "#FFD700", 
          color:"gray",
          "&:hover": { backgroundColor: "#FFC107" },
        }} 
        onClick={() => navigate("/shop")} // Navigate to the shop page
      >
        Start Shopping
      </Button>
    </Box>
  );
}
