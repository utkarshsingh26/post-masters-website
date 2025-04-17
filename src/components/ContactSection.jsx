import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function ContactSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        textAlign: "center",
        px: { xs: 2, sm: 4 }, // padding left & right for mobile
        py: 4,
      }}
    >
      <Typography variant="body2" color="text.secondary" mb={3}>
        Reach out to collaborate, chat tech, or just say hi!
      </Typography>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1.5, sm: 3 }}
        flexWrap="wrap"
        useFlexGap
      >
        <Tooltip title="Instagram">
          <IconButton
            href="https://www.instagram.com/definitelynotutkarshsingh/"
            target="_blank"
            rel="noopener"
            sx={{ color: "#E1306C" }}
          >
            <InstagramIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            href="https://www.linkedin.com/in/singhutkarsh98/"
            target="_blank"
            rel="noopener"
            sx={{ color: "#0077B5" }}
          >
            <LinkedInIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub">
          <IconButton
            href="https://github.com/utkarshsingh26"
            target="_blank"
            rel="noopener"
            sx={{ color: "#000000" }}
          >
            <GitHubIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email">
          <IconButton
            href="mailto:usingh31@asu.edu"
            sx={{ color: "#D44638" }}
          >
            <EmailIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Google Scholar">
          <IconButton
            href="https://scholar.google.com/citations?user=y40YvsgAAAAJ&hl=en"
            target="_blank"
            sx={{ color: "#1976d2" }}
          >
            <SchoolIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="YouTube">
          <IconButton
            href="https://www.youtube.com/@soccer69ism"
            target="_blank"
            rel="noopener"
            sx={{ color: "#FF0000" }}
          >
            <YouTubeIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
}
