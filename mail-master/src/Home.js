import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled component for the container with white content
const StyledContainer = styled(Container)`
  && {
    color: #fff;
    text-align: center;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
  }
`;

const Home = () => {
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Welcome to MailMaster!
      </Typography>
      <Typography variant="body1" align="center">
      Start using MailMaster today and experience seamless email communication like never before.
      </Typography>
    </StyledContainer>
  );
};

export default Home;
