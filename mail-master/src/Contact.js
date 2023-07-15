import React from 'react';
import { Typography, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center">
        You can reach out to us using the following contact details.
      </Typography>
      <Typography variant="h6" component="h2" align="center" gutterBottom>
        Email: surajsahani@gmail.com
      </Typography>
      <Typography variant="h6" component="h2" align="center" gutterBottom>
        Phone: +91 9224567892
      </Typography>
    </Container>
  );
};

export default Contact;
