import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from '@mui/icons-material/School';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function ContactSection() {
  return (
    <Box
      // elevation={3}
      sx={{
        // width: '80%',
        // mx: "auto",
        // my: 6,
        // p: 4,
        // borderRadius: 3,
        // background: "#ffffff",
        // border: "1px solid #e0e0e0",
        textAlign: "center",
      }}
    >
      {/* <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        📬 Let’s Connect (or Singh along 🎤?)
      </Typography> */}

      <Typography variant="body2" color="text.secondary" mb={3}>
        Reach out to collaborate, chat tech, or just say hi!
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={3}>
        <Tooltip title="Instagram">
          <IconButton
            href="https://www.instagram.com/definitelynotutkarshsingh/"
            target="_blank"
            rel="noopener"
            sx={{ color: "#E1306C" }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            href="https://www.linkedin.com/in/singhutkarsh98/"
            target="_blank"
            rel="noopener"
            sx={{ color: "#0077B5" }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub">
          <IconButton
            href="https://github.com/utkarshsingh26"
            target="_blank"
            rel="noopener"
            sx={{ color: "#000000" }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email">
          <IconButton
            href="mailto:usingh31@asu.edu"
            sx={{ color: "#D44638" }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Google Scholar">
          <IconButton
            href="https://scholar.google.com/citations?user=y40YvsgAAAAJ&hl=en"
            target="_blank"
            sx={{ color: "#1976d2" }}
          >
            <SchoolIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="YouTube">
          <IconButton
            href="https://www.youtube.com/@soccer69ism"
            target="_blank"
            rel="noopener"
            sx={{ color: "#FF0000" }}
          >
            <YouTubeIcon fontSize="large" />
          </IconButton>
        </Tooltip>

      </Stack>
    </Box>
  );
}
