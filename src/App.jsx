import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, Paper } from "@mui/material";

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
import ComingSoonNotice from "./components/ComingSoonNotice";
import { ScrollRevealTitle } from "./components/ScrollRevealTitle";
import TimelineIcon from '@mui/icons-material/Timeline';
import SchoolIcon from '@mui/icons-material/School';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BookIcon from '@mui/icons-material/Book';

function App() {
  // const [open, setOpen] = useState(true);

  // const handleClose = () => setOpen(false);

  const Panel = ({ children, ...props }) => (
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
      {...props}
    >
      {children}
    </Paper>
  );

  return (
    <Box sx={{ backgroundColor: '#eee' }}>
      {/* Under Renovation Popup */}
      {/* <Dialog open={open} onClose={handleClose}>
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
      </Dialog> */}

      <ResponsiveAppBar />

      {/* About Section */}
      <Panel id="about">
      <ScrollRevealTitle title="Who I Am & What I Bring to the Table" icon={<SentimentVerySatisfiedIcon sx={{ color: 'primary.main', fontSize: 30 }} />} />
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

      {/* Skills & Timeline Section */}
      <Panel id="experience">
        <ScrollRevealTitle title="What I Know & Where I've Been" icon={<TimelineIcon sx={{ color: 'primary.main', fontSize: 30 }} />} />
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

      {/* Education Section */}
      <Panel id="education">
        <ScrollRevealTitle title="My Education" icon={<SchoolIcon sx={{ color: 'primary.main', fontSize: 30 }} />} />
        <EducationCards />
      </Panel>

      {/* Experience & Projects Section */}
      <Panel id="projects">
      <ScrollRevealTitle title="The Fabled Research Projects" icon={<BookIcon sx={{ color: 'primary.main', fontSize: 30 }} />} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          {/* Left Side */}
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <StarredProjectsTerminal />
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

          {/* Right Side */}
          <Box flex={1} display="flex" flexDirection="column" gap={2}>
            <Box sx={{ width: "100%", maxWidth: "100%", minHeight: 300, flexGrow: 1 }}>
              <ThesisDefenseVideo />
            </Box>
            <ComingSoonNotice />
          </Box>
        </Box>
      </Panel>

      {/* Projects Section */}
      <Panel id="contact">
      <ScrollRevealTitle title="Let’s Connect (or Singh along 🎤?)" icon={<HandshakeIcon sx={{ color: 'primary.main', fontSize: 30 }} />} />
        <ContactSection />
      </Panel>
    </Box>
  );
}

export default App;
