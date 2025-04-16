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
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TimelineIcon from '@mui/icons-material/Timeline';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import BookIcon from '@mui/icons-material/Book';
import HandshakeIcon from '@mui/icons-material/Handshake';

export function ScrollRevealTitle({ title, icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box ref={ref} textAlign="center" sx={{ mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(to right, #1976d2, #42a5f5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            height: 3,
            width: 200,
            background: 'linear-gradient(to right, #1976d2, #42a5f5)',
            mx: 'auto',
            mt: 1,
            borderRadius: 2,
          }}
        />
      </motion.div>
    </Box>
  );
}



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
        // background: "rgba(255, 255, 255, 0.7)",
        background: "#f9f9fb"
      }}
    >
      {children}
    </Paper>
  );

  return (
    <Box sx={{ backgroundColor: '#eeee', minHeight: '100vh', overflowX: 'hidden'}}>
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

      {/* Skills + Timeline */}
      <Panel>
  {/* Scroll-triggered Heading */}
  <ScrollRevealTitle title="What I Know & Where I've Been" icon={<TimelineIcon sx={{ color: 'primary.main', fontSize: 30 }} />} />

  {/* Main content */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      alignItems: 'center',
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
      <ScrollRevealTitle title="My Education" icon={<SchoolIcon sx={{ color: 'primary.main', fontSize: 30 }} />} />
        <EducationCards />
      </Panel>

      {/* Starred Projects + Thesis */}
      <Panel>
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
    {/* Left Side: Stacked items */}
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

    {/* Right Side: Thesis Video */}
    <Box flex={1} display="flex" flexDirection="column" gap={2}>
  <Box
    sx={{
      width: "100%",
      maxWidth: "100%",
      minHeight: 300, // Optional: force height
      flexGrow: 1,
    }}
  >
    <ThesisDefenseVideo />
  </Box>

  <Paper
    elevation={2}
    sx={{
      p: 2,
      borderRadius: 2,
      border: "1px solid #e0e0e0",
      backgroundColor: "#f0f7ff",
      textAlign: "center",
      maxWidth: 600,
      mx: "auto",
    }}
  >
    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
      <RocketLaunchIcon color="primary" fontSize="large" />
      <Typography variant="subtitle1" fontWeight="bold" color="primary">
        MORE COOL STUFF COMING OUT SOON
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Stay tuned — I’m cooking up some new things you won’t want to miss!
      </Typography>
    </Box>
  </Paper>
</Box>
  </Box>
    </Panel>



      {/* Contact Section Already Uses Panel Styling */}
      <Panel>
      <ScrollRevealTitle title="Let’s Connect (or Singh along 🎤?)" icon={<HandshakeIcon sx={{ color: 'primary.main', fontSize: 30 }} />} />
      <ContactSection />
      </Panel>
    </Box>
  );
}

export default App;
