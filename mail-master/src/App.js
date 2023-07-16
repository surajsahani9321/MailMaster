import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import EmailForm from './EmailForm';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Services from './Services';
import Contact from './Contact';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

// Custom styled component for the full-width image
const BackgroundImage = styled('div')`
  background-image: url('/static/s2.webp');
  background-size: cover;
  background-position: center;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <BackgroundImage>
        <Container component="main" sx={{ flexGrow: 1, pt: 4 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/emailform" element={<EmailForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        </BackgroundImage>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
