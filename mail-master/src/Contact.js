import React from 'react';
import { Typography, Container, Box, styled } from '@mui/material';

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
const Contact = () => {
  return (
    <StyledContainer>
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" align="center" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" style={{ color: '#fff', fontWeight: 'bold' }}>
        You can reach out to us using the following contact details.
      </Typography>
        <Typography variant="h6" component="h2" align="center" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Email: surajsahani@gmail.com
        </Typography>
        <Typography variant="h6" component="h2" align="center" gutterBottom style={{ color: '#fff', fontWeight: 'bold' }}>
          Phone: +91 9224567892
        </Typography>
    </Container>
    </StyledContainer>
  );
};

export default Contact;
