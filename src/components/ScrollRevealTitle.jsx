// src/components/ScrollRevealTitle.jsx

import { Typography, Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
