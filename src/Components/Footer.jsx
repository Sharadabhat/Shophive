// import React from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import { Link } from "react-router-dom";
// import Logo from "../Assets/Images/e-baazar.png";

// const Footer = () => {
//   return (
//     <Paper
//       elevation={10}
//       sx={{
//         color: "#353543",
//         py: 4,
//         px: 2,
//         textAlign: { xs: "center", md: "left" },
//       }}
//     >
//       <Grid container spacing={2} justifyContent="center">
//         {/* Website Title and Tagline */}
//         <Grid item xs={12} md={6}>
//           <img style={{ width: "100px", color: "black" }} src={Logo} alt="logo" />
//           <Typography variant="body1" sx={{ mt: 1 }}>
//             sub title or tagline
//           </Typography>
//         </Grid>

//         {/* Quick Links */}
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{ textAlign: { xs: "center", md: "right" } }}
//         >
//           <Typography variant="h6" fontWeight="bold">
//             Quick Links
//           </Typography>
//           <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
//             <Link
//               to="/"
//               style={{
//                 display: "block",
//                 mb: 1,
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "18px",
//               }}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               style={{
//                 display: "block",
//                 mb: 1,
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "18px",
//               }}
//             >
//               About
//             </Link>
//             <Link
//               to="/shop"
//               style={{
//                 display: "block",
//                 mb: 1,
//                 textDecoration: "none",
//                 fontWeight: "600",
//                 fontSize: "18px",
//               }}
//             >
//               Shop
//             </Link>
//           </Box>
//         </Grid>
//       </Grid>

//       <Typography
//         variant="body2"
//         sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
//       >
//         &copy; {new Date().getFullYear()} title. All Rights Reserved.
//       </Typography>
//     </Paper>
//   );
// };

// export default Footer;

// import React from "react";
// import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
// import { Link } from "react-router-dom";
// import Logo from "../Assets/Images/e-baazar.png";

// const Footer = () => {
//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         backgroundColor: "#fff",
//         color: "#333",
//         py: 4,
//         px: 3,
//         textAlign: { xs: "center", md: "left" },
//       }}
//     >
//       <Grid container spacing={3} justifyContent="center">
//         {/* Brand Logo and About */}
//         <Grid item xs={12} md={4}>
//           <img style={{ width: "120px" }} src={Logo} alt="E-Baazar Logo" />
//           <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
//             Your one-stop marketplace for quality products at the best prices.
//             Experience seamless shopping with us.
//           </Typography>
//         </Grid>

//         {/* Quick Links */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" fontWeight="bold" sx={{textAlign: "center" }}>
//             Quick Links
//           </Typography>
//           <Box sx={{ mt: 1, display: "flex", flexDirection: "column",textAlign: "center" }}>
//             {["Home", "About Us", "Shop", "Contact Us", "FAQ"].map((text) => (
//               <Link
//                 key={text}
//                 to={`/${text.toLowerCase().replace(/\s/g, "-")}`}
//                 style={{
//                   textDecoration: "none",
//                   color: "#666",
//                   fontSize: "16px",
//                   margin: "5px 0",
//                   transition: "color 0.3s",
//                 }}
//                 onMouseOver={(e) => (e.target.style.color = "#000")}
//                 onMouseOut={(e) => (e.target.style.color = "#666")}
//               >
//                 {text}
//               </Link>
//             ))}
//           </Box>
//         </Grid>

//         {/* Contact Information */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" fontWeight="bold" sx={{textAlign: "center" }}>
//             Contact Us
//           </Typography>
//           <Typography variant="body2" sx={{ mt: 1, fontSize: "18px" , color: "#555" ,textAlign: "center" }}>
//             📍 123 Market Street, City, Country
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#555", fontSize: "18px" ,textAlign: "center" }}>
//             📞 +1 234 567 890
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#555", fontSize: "18px",textAlign: "center" }}>
//             ✉️ support@e-baazar.com
//           </Typography>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 3, backgroundColor: "#ddd" }} />

//       {/* Copyright Section */}
//       <Typography
//         variant="body2"
//         sx={{ textAlign: "center", color: "#777" }}
//       >
//         &copy; {new Date().getFullYear()} E-Baazar. All Rights Reserved.
//       </Typography>
//     </Paper>
//   );
// };

// export default Footer;

// import React from "react";
// import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Logo from "../Assets/Images/logo2.png";

// const Footer = () => {
//   const navigate = useNavigate();

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Shop", path: "/shop" },
//   ];

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         backgroundColor: "white",
//         color: "#333",
//         py: 6,
//         px: { xs: 3, md: 8 },
//         textAlign: "center",
//       }}
//     >
//       <Grid container spacing={4} justifyContent="center">
//         {/* Brand Logo and About */}
//         <Grid item xs={12} md={4}>
//           <img style={{ width: "140px" }} src={Logo} alt="Shophive Logo" />
//           <Typography variant="body2" sx={{ mt: 2, color: "#666" }}>
//             Welcome to Shophive, your trusted online store for quality products at unbeatable prices. Enjoy a seamless shopping experience with us.
//           </Typography>
//         </Grid>

//         {/* Quick Links */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff6600", mb: 1 }}>
//             Quick Links
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//             {links.map((link, index) => (
//               <Typography
//                 key={index}
//                 onClick={() => navigate(link.path)}
//                 sx={{
//                   cursor: "pointer",
//                   color: "#444",
//                   fontSize: "16px",
//                   transition: "color 0.3s",
//                   "&:hover": { color: "#ff6600" },
//                 }}
//               >
//                 {link.name}
//               </Typography>
//             ))}
//           </Box>
//         </Grid>

//         {/* Contact Information */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" fontWeight="bold" sx={{ color: "#ff6600", mb: 1 }}>
//             Contact Us
//           </Typography>
//           <Typography variant="body2" sx={{ fontSize: "18px", color: "#555" }}>
//             📍 Shophive HQ, 456 Commerce Road, Market City, India
//           </Typography>
//           <Typography variant="body2" sx={{ fontSize: "18px", color: "#555" }}>
//             📞 +1 987 654 3210
//           </Typography>
//           <Typography variant="body2" sx={{ fontSize: "18px", color: "#555" }}>
//             ✉️ support@shophive.com
//           </Typography>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 4, backgroundColor: "#ddd" }} />

//       {/* Copyright Section */}
//       <Typography variant="body2" sx={{ color: "#777" }}>
//         &copy; {new Date().getFullYear()} Shophive. All Rights Reserved.
//       </Typography>
//     </Paper>
//   );
// };

// export default Footer;
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




