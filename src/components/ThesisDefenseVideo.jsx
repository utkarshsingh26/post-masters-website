import React from "react";
import { Box, Typography, Paper } from "@mui/material";

export default function ThesisDefenseVideo() {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 800,
        mx: "auto",
        my: 6,
        p: 4,
        borderRadius: 3,
        background: "#ffffff",
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        color="primary"
        textAlign="center"
        gutterBottom
      >
        🎓 Watch me defend my Thesis
      </Typography>

      <Box
        sx={{
          position: "relative",
          pt: "56.25%", // 16:9 aspect ratio
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/EmCFjHRFd6c"
          title="Thesis Defense - Utkarsh Singh"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        ></iframe>
      </Box>
    </Paper>
  );
}
