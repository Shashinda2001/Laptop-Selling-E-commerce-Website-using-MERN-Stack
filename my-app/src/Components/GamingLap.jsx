import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ExampleCarouselImage3 from '../Images/l1_.jpg';
import React, { useState } from 'react';

function GamingLap() {
  const [isHovered, setIsHovered] = useState(false);
  const cardStyle = {
    width: '18rem',
    border: 'none',
    transition: 'box-shadow 0.3s',
    cursor: 'pointer', // Optional: add pointer cursor on hover
    boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0)',
  };

  const cardStyleHover = {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  };




  return (
    <div className="container mt-4 pt-5 ">
      <div className="display-6  text-center bg-light">
        <p>Explore our high-performance gaming laptops for an immersive gaming experience.</p>
        <p className="lead ">Best Gaming Laptops..</p>
      </div>


      <div className="row lg-justify-content-start md-justify-content-center align-items-center">

        <div className="col-12 col-md-3 mt-3 d-flex justify-content-center">

          <Card style={cardStyle} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Card.Title className='text-center mt-3'>Card Title</Card.Title>
            <Card.Text className='text-center text-primary fw-bold mx-2 h-3'>
              Lorem ipsum dolor, sit amet  Impedit!
            </Card.Text>
            <Card.Img variant="top" src={ExampleCarouselImage3} />
            <Card.Body>
              <p className="lead text-center text-danger fw-bold">Rs.300,000.00</p>
              <div className='d-flex justify-content-between align-items-center'>
                <Button variant="danger" className='mx-2'>Buy Now</Button>
                <Button variant="danger" className='mx-2'>
                  <i className="fas fa-shopping-cart"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>

        </div>


        <div className="col-12 col-md-3 mt-3 d-flex justify-content-center">

          <Card style={cardStyle} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Card.Title className='text-center mt-3'>Card Title</Card.Title>
            <Card.Text className='text-center text-primary fw-bold mx-2 h-3'>
              Lorem ipsum dolor, sit rramet  Impedit!
            </Card.Text>
            <Card.Img variant="top" src={ExampleCarouselImage3} />
            <Card.Body>
              <p className="lead text-center text-danger fw-bold">Rs.200,000.00</p>
              <div className='d-flex justify-content-between align-items-center'>
                <Button variant="danger" className='mx-2'>Buy Now</Button>
                <Button variant="danger" className='mx-2'>
                  <i className="fas fa-shopping-cart"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>

        </div>


        <div className="col-12 col-md-3 mt-3 d-flex justify-content-center">

          <Card style={cardStyle} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Card.Title className='text-center mt-3'>Card Title</Card.Title>
            <Card.Text className='text-center text-primary fw-bold mx-2 h-100'>
              Lorem ipsum dolor, sit Impedit! gghhjh
            </Card.Text>
            <Card.Img variant="top" src={ExampleCarouselImage3} />
            <Card.Body>
              <p className="lead text-center text-danger fw-bold">Rs.340,000.00</p>
              <div className='d-flex justify-content-between align-items-center'>
                <Button variant="danger" className='mx-2'>Buy Now</Button>
                <Button variant="danger" className='mx-2'>
                  <i className="fas fa-shopping-cart"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>

        </div>

        <div className="col-12 col-md-3 mt-3 d-flex justify-content-center">

          <Card style={cardStyle} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Card.Title className='text-center mt-3'>Card Title</Card.Title>
            <Card.Text className='text-center text-primary fw-bold mx-2'>
              Lorem ipsum dolor, sit amet  Impedit! ff
            </Card.Text>
            <Card.Img variant="top" src={ExampleCarouselImage3} />
            <Card.Body>
              <p className="lead text-center text-danger fw-bold">Rs.305,000.00</p>
              <div className='d-flex justify-content-between align-items-center'>
                <Button variant="danger" className='mx-2'>Buy Now</Button>
                <Button variant="danger" className='mx-2'>
                  <i className="fas fa-shopping-cart"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>

        </div>
        <div className="col-12 col-md-3 mt-3 d-flex justify-content-center">

          <Card style={cardStyle} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Card.Title className='text-center mt-3'>Card Title</Card.Title>
            <Card.Text className='text-center text-primary fw-bold mx-2'>
              Lorem ipsum dolor, sit amet  Impedit!
            </Card.Text>
            <Card.Img variant="top" src={ExampleCarouselImage3} />
            <Card.Body>
              <p className="lead text-center text-danger fw-bold">Rs.300,000.00</p>
              <div className='d-flex justify-content-between align-items-center'>
                <Button variant="danger" className='mx-2'>Buy Now</Button>
                <Button variant="danger" className='mx-2'>
                  <i className="fas fa-shopping-cart"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>

        </div>
        <div className="col-12 col-md-3 mt-3 d-flex justify-content-center">

          <Card style={cardStyle} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Card.Title className='text-center mt-3'>Card Title</Card.Title>
            <Card.Text className='text-center text-primary fw-bold mx-2'>
              Lorem ipsum dolor, sit amet  Impedit!
            </Card.Text>
            <Card.Img variant="top" src={ExampleCarouselImage3} />
            <Card.Body>
              <p className="lead text-center text-danger fw-bold">Rs.300,000.00</p>
              <div className='d-flex justify-content-between align-items-center'>
                <Button variant="danger" className='mx-2'>Buy Now</Button>
                <Button variant="danger" className='mx-2'>
                  <i className="fas fa-shopping-cart"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>

        </div>

      </div>
    </div>
  );
}

export default GamingLap;