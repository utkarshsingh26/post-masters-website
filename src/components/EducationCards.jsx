import React, { useState } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const FlipCard = ({ frontTitle, frontSubtitle, backContent, backgroundImage }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      sx={{
        perspective: 1000,
        width: 300,
        height: 300,
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {/* Front */}
        <Card
         elevation={6}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <CardContent
            sx={{
              bgcolor: "rgba(0, 0, 0, 0.6)",
              borderRadius: 1,
              textAlign: "center",
              position: "absolute",
              bottom: 16,
              left: 0,
              right: 0,
            }}
          >
            <Typography variant="h6">{frontTitle}</Typography>
            <Typography variant="body2">{frontSubtitle}</Typography>
          </CardContent>
        </Card>

        {/* Back */}
        <Card
         elevation={6}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            bgcolor: "#f5f5f5",
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <CardContent>{backContent}</CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default function EducationCards() {
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 14,
        flexWrap: "wrap",
        py: 8,
      }}
    >
      {/* "knowledge" text */}
      <Typography
        variant="h4"
        sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #0d47a1, #42a5f5)", // dark blue to light blue
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
        }}
        >
        Knowledge
        </Typography>


      {/* Grad Card */}
      <FlipCard
        frontTitle="Arizona State University"
        frontSubtitle="M.S. in CS (2023–2025)"
        backgroundImage="fork.png"
        backContent={
          <>
            <Typography variant="body2">1. <b>Graduate Teaching Assistant</b> for Data Viz (CSE 578)</Typography>
            <Typography variant="body2">2. <b>Research Assistant</b> at the Sonoran Viz Lab</Typography>
            <Typography variant="body2">3. <b>Top performer</b> in Distributed Database Systems (CSE 512)</Typography>
            <Typography variant="body2">4. Thesis: <b>AI-Driven Healthcare Viz</b></Typography>
          </>
        }
      />

      {/* "is" text */}
      <Typography
        variant="h4"
        sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #42a5f5, #ffb74d)", // light blue to light orange
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
        }}
        >
        is
        </Typography>


      {/* Undergrad Card */}
      <FlipCard
        frontTitle="SRM IST"
        frontSubtitle="B.Tech in CS (2017–2021)"
        backgroundImage="srm.png"
        backContent={
          <>
            <Typography variant="body2">1. <b>First Class</b> with <b>Distinction</b></Typography>
            <Typography variant="body2">2. Capstone: <b>Movie Recommendation System</b></Typography>
            <Typography variant="body2">3. Internships: <b>DRDO, Cognizant</b></Typography>
            <Typography variant="body2">4. <b>IEEE Paper Published</b></Typography>
          </>
        }
      />



      {/* "power" text */}
      <Typography
        variant="h4"
        sx={{
            fontWeight: "bold",
            background: "linear-gradient(to right, #ffb74d, #d32f2f)", // light orange to fiery red
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
        }}
        >
        Power.
        </Typography>

    </Box>
  );
}
