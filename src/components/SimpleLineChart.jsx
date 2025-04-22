// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { Typography, Box } from '@mui/material';

// const uData = [2000, 2800, 3000, 3400, 4000, 4500, 5000];
// const pData = [2000, 1398, 1800, 2000, 1800, 2200, 2105];
// const xLabels = [
//   'Year 1',
//   'Year 2',
//   'Year 3',
//   'Year 4',
//   'Year 5',
//   'Year 6',
//   'Year 7',
// ];

// export default function SimpleLineChart() {
//   return (
//     <Box display="flex" flexDirection="column" alignItems="center">
//       <LineChart
//         width={800}
//         height={500}
//         series={[
//           { data: uData, label: 'You hired me', color: 'green' },
//           { data: pData, label: 'You did not hire me', color: 'red' },
//         ]}
//         xAxis={[{ scaleType: 'point', data: xLabels }]}
//       />
//       <Typography
//         variant="h5"
//         fontWeight="bold"
//         color="primary"
//         sx={{ mt: 2 }}
//       >
//         Your Company's Revenue in Millions($) over Time
//       </Typography>
//     </Box>
//   );
// }

import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";

const uData = [200, 280, 300, 340, 400, 450, 500];
const pData = [200, 139, 180, 200, 180, 220, 210];
const xLabels = [
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Year 7",
];

export default function SimpleLineChart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ px: { xs: 2, md: 4 }, py: 4 }}
    >
      <LineChart
        width={isMobile ? 350 : 800}
        height={isMobile ? 300 : 500}
        series={[
          { data: uData, label: "You hired me", color: "green" },
          { data: pData, label: "You did not hire me", color: "red" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
      <Typography
        variant={isMobile ? "body1" : "h5"}
        fontWeight="bold"
        color="primary"
        sx={{ mt: 2, textAlign: "center" }}
      >
        Your Company's Revenue in Millions($) over Time
      </Typography>
    </Box>
  );
}

