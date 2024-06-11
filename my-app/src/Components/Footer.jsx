import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='mt-4'>
      <footer style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <h5>About LaptopStore</h5>
            <p>
              LaptopStore is a leading retailer of the latest laptops and accessories.
              We strive to provide the best products at competitive prices.
            </p>
          </Col>
          <Col md={4} sm={12}>
            <h5>Links</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>Contact Us</h5>
            <address>
              Email: info@laptopstore.com<br />
              Phone: 123-456-7890<br />
              Address: 123 Laptop St, City, Country
            </address>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center mt-4">
            <p>
              &copy; {new Date().getFullYear()} LaptopStore. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>

    </div>
    
  );
};

export default Footer;
