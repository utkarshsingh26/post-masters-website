import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography } from '@mui/material';

export default function MyTimeline() {
  return (
    <>
    {/* <Typography variant="h5" color="gray.300">
    Here's a timeline of my journey
    </Typography> */}
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Dec 2024 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="asu-logo.gif"
            alt="custom icon"
            style={{ width: 60, height: 60, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Graduate Research Assistant</Typography>
          <Typography>ASU - Sonaran Viz Lab</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Jan 2024 – May 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="asu-logo.gif"
            alt="custom icon"
            style={{ width: 60, height: 60, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Graduate Teaching Assistant</Typography>
          <Typography>ASU — Data Visualization (CSE 578)</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          May 2024 – Aug 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="resilience.jpeg"
            alt="custom icon"
            style={{ width: 60, height: 60, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Intern</Typography>
          <Typography>Resilience, Inc</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          June 2021 – Feb 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="jio.png"
            alt="custom icon"
            style={{ width: 60, height: 60, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Software Engineer</Typography>
          <Typography>Jio Platforms Ltd</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Jan 2021 – May 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="cognizant.jpg"
            alt="custom icon"
            style={{ width: 60, height: 60, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">App Dev Intern</Typography>
          <Typography>Cognizant</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Jun 2019 – Jul 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="drdo.png"
            alt="custom icon"
            style={{ width: 60, height: 60, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Summer Intern</Typography>
          <Typography>Defence Research and Development Organisation</Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </>
  );
}
