import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import InsightsIcon from "@mui/icons-material/Insights";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from "@mui/icons-material/Person";

export default function StarredProjectCard() {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 800,
        height: '100%',
        mx: "auto",
        p: 4,
        borderRadius: 3,
        background: "#f4fafd",
        border: "1px solid #e0f2f1",
      }}
    >
      {/* Header */}
      <Stack direction="row" alignItems="center" spacing={2} mb={2}>
        <InsightsIcon sx={{ fontSize: 40, color: "#2a7de1" }} />
        <Box>
          <Typography variant="h5" fontWeight="bold" color="primary">
            AI-Driven Healthcare Visualization
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Translating complex reports into visual insights for doctors
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {/* Sections */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box flex={1}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Project Summary
          </Typography>
          <Typography variant="body2" color="text.secondary">
            An intelligent system that transforms radiology reports into
            interactive, avatar-based visuals using OpenAI + Firebase. Built
            with feedback from Mayo Clinic doctors to reduce cognitive load and
            improve diagnosis clarity.
          </Typography>
        </Box>

        <Box flex={1}>
          <Typography variant="subtitle1" fontWeight="bold" mb={1}>
            Features
          </Typography>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <PersonIcon color="action" />
              <Typography variant="body2">Avatar-based highlights</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <TimelineIcon color="action" />
              <Typography variant="body2">
                Timeline comparison of reports
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <InsightsIcon color="action" />
              <Typography variant="body2">LLM-powered summarization</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Footer */}
      <Divider sx={{ my: 3 }} />
      <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
        {["React", "Firebase", "OpenAI", "D3.js"].map((tech) => (
          <Chip key={tech} label={tech} color="primary" variant="outlined" />
        ))}
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.youtube.com/watch?v=GdtbjqOSDXk"
          target="_blank"
        >
          Live Demo
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://github.com/utkarshsingh26/patient-portraits-thesis"
          target="_blank"
        >
          View Code
        </Button>
      </Stack>
    </Paper>
  );
}
