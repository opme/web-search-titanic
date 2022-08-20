// React
import React from 'react'
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';
const Homepage = () => {
  return (
    <Container component="main" maxWidth="xl">

      <Header />
      <div style={{paddingTop: "25px"}}>
        <Footer />
      </div>
    </Container>
  );
}

export default Homepage
