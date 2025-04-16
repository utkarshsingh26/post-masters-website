import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function ComingSoonNotice() {
  return (
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
        textAlign: "center",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <RocketLaunchIcon color="primary" fontSize="large" />
        <Typography variant="h6" fontWeight="bold" color="primary">
          MORE COOL STUFF COMING OUT SOON
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stay tuned — I’m cooking up some new things you won’t want to miss!
        </Typography>
      </Box>
    </Paper>
  );
}
