import { Box, Avatar, Typography } from "@mui/material";

// Sample images - replace with your actual logo paths
const skillImages = [
  // U shape
  "react.png", "nodejs.png", "firebase.png", "typescript.png", "nextjs.png",
  // S shape
  "python.png", "cpp.png", "docker.png", "aws.png", "git.png"
];

export default function SkillsWordCloud() {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        textAlign: "center",
        // backgroundColor: "#f9f9f9",
      }}
    >
      {/* <Typography variant="h4" fontWeight="bold" gutterBottom>
        Tech that makes <span style={{ color: "#1976d2" }}>US</span>
      </Typography> */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: 2,
          justifyItems: "center",
          alignItems: "center",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {/* U-shaped placement */}
        <Avatar src="react.png"     sx={{ gridColumn: "1", gridRow: "1", width: 50, height: 50 }} />
        <Avatar src="nodejs.png"    sx={{ gridColumn: "1", gridRow: "2", width: 50, height: 50 }} />
        <Avatar src="firebase.png"  sx={{ gridColumn: "1", gridRow: "3", width: 50, height: 50 }} />
        <Avatar src="typescript.png" sx={{ gridColumn: "1", gridRow: "4", width: 50, height: 50 }} />
        <Avatar src="nextjs.png"    sx={{ gridColumn: "2", gridRow: "5", width: 50, height: 50 }} />
        <Avatar src="cpp.png"       sx={{ gridColumn: "3", gridRow: "5", width: 50, height: 50 }} />
        <Avatar src="python.png"    sx={{ gridColumn: "4", gridRow: "4", width: 50, height: 50 }} />
        <Avatar src="docker.png"    sx={{ gridColumn: "4", gridRow: "3", width: 50, height: 50 }} />
        <Avatar src="aws.png"       sx={{ gridColumn: "4", gridRow: "2", width: 50, height: 50 }} />
        <Avatar src="git.png"       sx={{ gridColumn: "4", gridRow: "1", width: 50, height: 50 }} />

        {/* S-shaped placement */}
        <Avatar src="aws.png"      sx={{ gridColumn: "7", gridRow: "1", width: 50, height: 50 }} />
        <Avatar src="git.png"      sx={{ gridColumn: "8", gridRow: "1", width: 50, height: 50 }} />
        <Avatar src="nextjs.png"   sx={{ gridColumn: "9", gridRow: "1", width: 50, height: 50 }} />

        <Avatar src="aws.png"      sx={{ gridColumn: "7", gridRow: "2", width: 50, height: 50 }} />

        <Avatar src="typescript.png" sx={{ gridColumn: "7", gridRow: "3", width: 50, height: 50 }} />
        <Avatar src="firebase.png"   sx={{ gridColumn: "8", gridRow: "3", width: 50, height: 50 }} />
        <Avatar src="docker.png"     sx={{ gridColumn: "9", gridRow: "3", width: 50, height: 50 }} />

        <Avatar src="python.png"   sx={{ gridColumn: "9", gridRow: "4", width: 50, height: 50 }} />
        <Avatar src="react.png"    sx={{ gridColumn: "8", gridRow: "5", width: 50, height: 50 }} />
        <Avatar src="cpp.png"      sx={{ gridColumn: "7", gridRow: "5", width: 50, height: 50 }} />
      </Box>
    </Box>
  );
}
