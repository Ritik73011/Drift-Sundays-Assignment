import { Box, Typography,Slide } from "@mui/material";
import React from "react";

const HomeRightSide = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Slide direction="down" in mountOnEnter unmountOnExit>
      <Box
        sx={{
          minHeight: "73vh",
          maxHeight: "73vh",
          background:
            "url('https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/car-optics-view-through-smoke-black-background-color-lighting-adaptiver-led-free-video.jpg?alt=media&token=36c6892c-a713-4026-9f39-5a9d1da0f3e5')",
          backgroundSize: "cover",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            minHeight: "73vh",
            objectFit: "fill",
            maxHeight: "73vh",
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/ezgif-5-06a53791e7.webm?alt=media&token=2d83a14c-4700-4891-aaaf-6e2aaace8a96"
            type="video/mp4"
          />
        </video>
      </Box>
      </Slide>
      <Slide direction="up" in mountOnEnter unmountOnExit>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "18vh",
        }}
      >
        <Box
          sx={{
            background:
              "url('https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/d1.jpeg?alt=media&token=9ed25e24-e4dd-4c8a-9a96-4b68f6d0a78d')",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              textAlign: "center",
              height: "100%",
              display: "grid",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white",fontSize:"14px",fontWeight:"bolder", padding: "24px 12px" }}>
              ONE OF THE BEST TRACKS
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            background:
              "url('https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/d2.jpg?alt=media&token=d8590219-1649-42fa-9c06-e9c681b212f3')",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              textAlign: "center",
              height: "100%",
              display: "grid",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white",fontSize:"14px",fontWeight:"bolder", padding: "24px 12px" }}>
              TRAINING ALL YEAR ROUND
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            background:
              "url('https://firebasestorage.googleapis.com/v0/b/agumentik-company.appspot.com/o/d3.jpg?alt=media&token=68520091-9da7-47d8-bad1-d69b50f1fbd8')",
            backgroundSize: "cover",
            width: "100%",
          }}
        >
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.5)",
              width: "100%",
              textAlign: "center",
              height: "100%",
              display: "grid",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "white",fontSize:"14px",fontWeight:"bolder", padding: "24px 12px" }}>
              POWERFUL CARS
            </Typography>
          </Box>
        </Box>
      </Box>
      </Slide>
    </Box>
  );
};
export default HomeRightSide;
