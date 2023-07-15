import React from 'react';
import { Typography, Container, Box, Avatar, Fade } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled component for the profile image
const ProfileImage = styled(Avatar)`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const Profile = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '4px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <ProfileImage
          alt="Profile Picture"
          src="/p1.jpg"
          sx={{
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
        <Typography variant="h4" align="center" gutterBottom>
          Developer Profile
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>Name:</strong> Suraj Sahani
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          <strong>Gender:</strong> Male
        </Typography>
        <Typography variant="body1" align="center">
          Full Stack Web Developer
        </Typography>
      </Box>
      <Fade in timeout={1000}>
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '1.5rem',
            borderRadius: '4px',
            marginTop: '2rem',
            textAlign: 'center',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography variant="h5" gutterBottom>
            About MailMaster
          </Typography>
          <Typography variant="body1">
            MailMaster is a powerful email sending application that provides a seamless
            experience for sending emails with or without attachments. It simplifies the
            process of email communication and ensures reliable delivery of messages.
          </Typography>
        </Box>
      </Fade>
    </Container>
  );
};

export default Profile;
