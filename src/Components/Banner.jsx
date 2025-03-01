// import React from "react";
// import { Box, Typography, Button, Grid } from "@mui/material";
// import pic from "../Assets/Images/single-image1.png";

// const Banner = () => {
//   return (
//     <Box
//       sx={{
//         bgcolor: "#f5f5f5",
//         overflow: "hidden",
//         mt: 5,
//         px: 4,
//         py: 6,
//         backgroundImage: `url(${pic})`,
//         backgroundPosition: "right",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "contain",
//         borderRadius: 2,
//       }}
//     >
//       <Grid container alignItems="center" spacing={4}>
//         {/* Left Content */}
//         <Grid item xs={12} md={6}>
//           <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
//             <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
//               Welcome to Our Platform
//             </Typography>
//             <Typography
//               variant="h2"
//               sx={{
//                 textTransform: "uppercase",
//                 color: "#0073e6",
//                 fontWeight: "bold",
//                 pb: 3,
//               }}
//             >
//               Your Trusted Partner
//             </Typography>
//             <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
//               We provide top-notch solutions tailored to your needs. Our mission is to 
//               empower businesses with innovative and efficient strategies that drive growth.
//             </Typography>
//             {/* <Button variant="contained" color="primary" size="large">
//               Get Started
//             </Button> */}
//           </Box>
//         </Grid>

//         {/* Right Content (Image Section) */}
//         <Grid item xs={12} md={6}>
//           {/* The image is set as a background in the container */}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Banner;
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import bannerImage from "../Assets/Images/bg5.jpg"; // Ensure the correct path

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "65vh", // Slightly increased height
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end", // Keeps text to the right but not too far
        textAlign: "left",
        px: { xs: 3, md: 2}, // Adjusted padding to bring text slightly to the center
        color: "white",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      />

      {/* Light Transparent Overlay for Readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(55, 53, 53, 0.3)", // Lighter overlay for better visibility
          zIndex: -1,
        }}
      />

      {/* Text Content (Slightly Shifted to Center) */}
      <Grid container justifyContent="flex-end">
        <Grid item xs={12} md={6} sx={{ pr: { md: 8 } }}> {/* Adjusted padding for centering */}
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Elevate Your Shopping Experience
          </Typography>
          <Typography variant="h5" sx={{ color: "#ffcc00", mb: 3 }}>
            Discover Exclusive Deals & Quality Products
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Explore the latest trends and unbeatable offers in one place. 
            Fast delivery, premium quality, and seamless shopping await you.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;




