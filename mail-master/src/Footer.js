import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        MailMaster &copy; {new Date().getFullYear()} By Suraj Sahani
      </Typography>
    </Box>
  );
};

export default Footer;
