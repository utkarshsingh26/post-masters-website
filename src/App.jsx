import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from "@mui/material";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HeroSection from "./components/HeroSection";
import SimpleLineChart from "./components/SimpleLineChart";
import MyTimeline from "./components/MyTimeline";
// import SkillsWordCloud from "./components/SkillsWordCloud";
import EducationCards from "./components/EducationCards";
import StarredProjectsTerminal from "./components/StarredProjectCard";
import ThesisDefenseVideo from "./components/ThesisDefenseVideo";
import ContactSection from "./components/ContactSection";
import SkillsNetworkGraph from "./components/SkillsNetworkGraph"; // commented as in your original code

function App() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Under Renovation Popup */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>🚧 Under Renovation</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            Hey there! This portfolio is currently being rebuilt — expect smoother interactions and better visuals soon.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus variant="contained" color="primary">
            Got it!
          </Button>
        </DialogActions>
      </Dialog>

      <ResponsiveAppBar />

      {/* Hero + Chart */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          px: 4,
          // py: 2,
          // gap: 4,
          // backgroundColor: 'red'
        }}
      >
        <Box flex={1}>
          <HeroSection />
        </Box>
        <Box flex={1}>
          <SimpleLineChart />
        </Box>
      </Box>

      {/* Skills + Timeline */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          px: 4,
          py: 8,
          gap: 4,
        }}
      >
        <Box flex={1}>
          {/* <SkillsWordCloud /> */}
          < SkillsNetworkGraph />
          </Box>
        <Box flex={1}>
          <MyTimeline />
        </Box>
      </Box>

      {/* Education */}
      <EducationCards />

      {/* Starred Project + Thesis */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          px: 4,
          py: 8,
          gap: 4,
        }}
      >
        <Box flex={1}>
          <StarredProjectsTerminal sx={{height: '100%'}} />
        </Box>
        <Box flex={1}>
          <ThesisDefenseVideo />
        </Box>
      </Box>

      {/* Contact */}
      <ContactSection />

      {/* Optional: Network Graph */}
      {/* <SkillsNetworkGraph /> */}
    </>
  );
}

export default App;
