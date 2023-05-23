import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

function HomePage() {
  const [entry, setEntry] = useState([]);
  useEffect(() => {
    axios.get('https://api.publicapis.org/entries')
    .then(response => {
      console.log(response.data.entries);
      setEntry(response.data.entries);
    });
  },[])

  
  const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1564507555469-a3772d88d2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  };

  const textStyle = {
    fontWeight: 'bold',
    color: 'black'
  };

  return (
    
    <Container fluid style={backgroundStyle}>
      <Row className="d-flex flex-column justify-content-center align-items-center text-center" style={{ height: '100vh' }}>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 style={textStyle}>Welcome to My Website</h1>
          <p style={textStyle}>ANI A RAKO DIRI PARA IPAKITA NAKO ANG KA GWAPO SA AKONG AMEGO NA SI GILBERT. PISLITA GAE NA ANG USA</p>
          <a href="./pages/AboutUs">
            <Button variant="primary">Pislita para makita ang nwng ni BERTO</Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default HomePage;
