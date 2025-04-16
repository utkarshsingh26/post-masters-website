import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Paper,
} from "@mui/material";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HeroSection from "./components/HeroSection";
import SimpleLineChart from "./components/SimpleLineChart";
import MyTimeline from "./components/MyTimeline";
import EducationCards from "./components/EducationCards";
import StarredProjectsTerminal from "./components/StarredProjectCard";
import ThesisDefenseVideo from "./components/ThesisDefenseVideo";
import ContactSection from "./components/ContactSection";
import SkillsNetworkGraph from "./components/SkillsNetworkGraph";
import CustomizedRating from "./components/CustomizedRating";

function App() {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);

  const Panel = ({ children }) => (
    <Paper
      elevation={3}
      sx={{
        width: "90%",
        mx: "auto",
        my: 4,
        p: 4,
        borderRadius: 3,
        border: "1px solid #e0e0e0",
        background: "#fff",
      }}
    >
      {children}
    </Paper>
  );

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
      <Panel>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box flex={1}>
            <HeroSection />
          </Box>
          <Box flex={1}>
            <SimpleLineChart />
          </Box>
        </Box>
      </Panel>

      {/* Skills + Timeline */}
      <Panel>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box flex={1}>
            <SkillsNetworkGraph />
          </Box>
          <Box flex={1}>
            <MyTimeline />
          </Box>
        </Box>
      </Panel>

      {/* Education */}
      <Panel>
        <EducationCards />
      </Panel>

      {/* Starred Projects + Thesis */}
      <Panel>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
        }}
      >
        {/* Left Side: Starred Projects + Ratings */}
        <Box flex={1}>
          <StarredProjectsTerminal />
<Box mt={2} sx={{maxWidth: 400}}>
  <Paper
    elevation={2}
    sx={{
      p: 2,
      borderRadius: 2,
      border: "1px solid #e0e0e0",
      backgroundColor: "#fafafa",
    }}
  >
    <CustomizedRating />
  </Paper>
</Box>
        </Box>

        {/* Right Side: Thesis Video */}
        <Box flex={1}>
          <ThesisDefenseVideo />
        </Box>
      </Box>
    </Panel>


      {/* Contact Section Already Uses Panel Styling */}
      <Panel>
      <ContactSection />
      </Panel>
    </>
  );
}

export default App;
