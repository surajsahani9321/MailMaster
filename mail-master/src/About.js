import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        About MailMaster
      </Typography>
      <Typography variant="body1" align="center">
        MailMaster is a simple email sending application built with React and Material-UI.
      </Typography>
    </Container>
  );
};

export default About;
