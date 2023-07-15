import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Welcome to MailMaster!
      </Typography>
      <Typography variant="body1" align="center">
        This is the home page of MailMaster application. You can use this application to send emails easily.
      </Typography>
    </Container>
  );
};

export default Home;
