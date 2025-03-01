import React from "react";
import ErrImg from "../Assets/Images/404errpage.jpg";

export default function Error() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        backgroundColor:"white",
        color: "#795712",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={ErrImg}
          alt="hello git new branch 01-03-2025-s"
          style={{ width: "300px", height: "300px", marginBottom: "1px",marginTop:"1px" }}
        />
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Oops! Something went wrong.</h1>
        <p style={{ fontSize: "20px", marginTop: "8px", color: "#795712" }}>
          The page you're looking for cannot be found.
        </p>
      </div>
    </div>
  );
}