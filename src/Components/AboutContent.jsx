import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import About from "../Assets/Images/about2.jpg";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "beige",
          borderRadius: "10px",
          p: 3,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid item xs={12} sm={6}>
          <img
            src={About}
            alt="About Us"
            style={{
              width: "100%",
              borderRadius: "20px",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ p: 3, textAlign: "left" }}>
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px", color: "#2c3e50" }}
            >
              About <span style={{ color: "#2c3e50" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "700", color: "#34495e" }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "left", color: "#7f8c8d" }}
            >
              At ShopHive, we believe shopping should be seamless, enjoyable, and rewarding. Our goal is to bring you the best products at unbeatable prices while ensuring a smooth and hassle-free experience.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "left", color: "#7f8c8d" }}
            >
              With a commitment to quality, innovation, and customer satisfaction, we constantly strive to improve our offerings. Whether you’re looking for the latest trends, reliable gadgets, or everyday essentials, we’ve got you covered. Join us and experience shopping like never before.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
