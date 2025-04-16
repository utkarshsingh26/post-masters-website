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
      {/* <Typography
        variant="h4"
        // fontWeight="bold"
        gutterBottom
        sx={{ textAlign: 'center', color: 'text.primary' }}
      >
        <i>A Quick Look at My Journey</i>
      </Typography> */}


    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          Dec 2024 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="asu.jpg"
            alt="custom icon"
            style={{ width: 70, height: 70, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: '#1976d2', width: 4, height: 10 }} />
        </TimelineSeparator>
        <TimelineContent sx={{mt: 2}}>
          <Typography variant="h6"><b>Graduate Research Assistant</b></Typography>
          <Typography sx={{ fontSize: '0.85rem' }}><i>Arizona State University</i></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: 'flex', alignItems: 'center'}}>
          Aug 2024 – Dec 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="asu.jpg"
            alt="custom icon"
            style={{ width: 70, height: 70, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: '#1976d2', width: 4, height: 10 }} />
        </TimelineSeparator>
        <TimelineContent sx={{mt: 2}}>
          <Typography variant="h6"><b>Graduate Teaching Assistant</b></Typography>
          <Typography sx={{ fontSize: '0.85rem' }}><i>Arizona State University</i></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          May 2024 – Aug 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="res-inc.jpg"
            alt="custom icon"
            style={{ width: 70, height: 70, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: '#1976d2', width: 4, height: 10 }} />
        </TimelineSeparator>
        <TimelineContent sx={{mt: 2}}>
          <Typography variant="h6"><b>Intern</b></Typography>
          <Typography sx={{ fontSize: '0.85rem' }}><i>Resilience, Inc</i></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: 'flex', alignItems: 'center'}}>
          June 2021 – Feb 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="jio.png"
            alt="custom icon"
            style={{ width: 70, height: 70, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: '#1976d2', width: 4, height: 10 }} />
        </TimelineSeparator>
        <TimelineContent sx={{mt: 2}}>
          <Typography variant="h6"><b>Software Engineer</b></Typography>
          <Typography sx={{ fontSize: '0.85rem' }}><i>Jio Platforms Ltd.</i></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          Jan 2021 – May 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="cognizant.jpg"
            alt="custom icon"
            style={{ width: 70, height: 70, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: '#1976d2', width: 4, height: 10 }} />
        </TimelineSeparator>
        <TimelineContent sx={{mt: 2}}>
          <Typography variant="h6"><b>App Dev Intern</b></Typography>
          <Typography sx={{ fontSize: '0.85rem' }}><i>Cognizant</i></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: 'flex', alignItems: 'center'}}>
          Jun 2019 – Jul 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
        <TimelineDot sx={{ p: 0, background: 'transparent', boxShadow: 'none' }}>
        <img
            src="drdo.png"
            alt="custom icon"
            style={{ width: 70, height: 70, borderRadius: '50%' }}
        />
        </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{mt: 2}}>
          <Typography variant="h6"><b>Summer Intern</b></Typography>
          <Typography sx={{ fontSize: '0.85rem' }}><i>D.R.D.O.</i></Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    </>
  );
}
