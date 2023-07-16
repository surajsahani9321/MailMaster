import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent, Box, Grow } from '@mui/material';

const Services = () => {
  const services = [
    {
      title: 'Email Sending',
      description: 'Send emails to your recipients with ease.',
      image: '/static/s1.jpg',
    },
    {
      title: 'Attachment Support',
      description: 'Attach files and documents to your emails.',
      image: '/static/s2.webp',
    },
    {
      title: 'Responsive Design',
      description: 'Enjoy a responsive design that works on all devices.',
      image: '/static/s3.png',
    },
    {
      title: 'User Profile Management',
      description: 'Manage user profiles and preferences.',
      image: '/static/s4.jpg',
    },
    {
      title: 'Analytics Tracking',
      description: 'Track and analyze email performance and engagement.',
      image: '/static/s5.jpg',
    },
    {
      title: 'Template Customization',
      description: 'Customize email templates to match your branding.',
      image: '/static/s6.jfif',
    },
  ];

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grow in key={index} timeout={index * 500}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent>
                  <Box textAlign="center">
                    <Typography variant="h5" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1">{service.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
