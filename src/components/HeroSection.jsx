import { Box, Typography, Button, Container, Stack, Rating, Avatar } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        // background: "linear-gradient(to right, #141e30, #243b55)",
        color: "black",
        py: 0,
        // pt: -8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
        <Avatar
            src="/Utkarsh_SIngh-Pro.jpeg" 
            alt="Utkarsh Singh"
            sx={{
              width: 150,
              height: 150,
              border: "3px solid #1976d2", 
            }}
          />
          <Typography variant="h2" fontWeight="bold">
            Hi, I'm Utkarsh Singh
          </Typography>
          <Typography variant="h5" color="gray.300">
            Software Engineer | AI Enthusiast | Creative Technologist
          </Typography>
          <Typography variant="body1" maxWidth="sm">
          I craft intelligent, scalable experiences that blend design and AI to solve real-world problems. If you're building the future, I want in.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ textTransform: "none" }}
              href="https://docs.google.com/document/d/1xl-DVsfCQW8XG35XK3Apd-1-kMOdrzDtMdcimn913so/edit?tab=t.0"
              target="_blank"
            >
              Kick-Ass Resume 
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ textTransform: "none" }}
              href="https://github.com/utkarshsingh26"
              target="_blank"
            >
              Smexy Projects
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
