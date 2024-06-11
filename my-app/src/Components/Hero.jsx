import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage1 from '../Images/l1_.jpg';
import ExampleCarouselImage2 from '../Images/l1_.jpg';
import ExampleCarouselImage3 from '../Images/l1_.jpg';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function Hero() {
  return (
    <div className="container mt-4 pt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ExampleCarouselImage1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ExampleCarouselImage2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ExampleCarouselImage3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* //////////////////////// */}
        <div className="col-md-4  justify-content-center">
            
        <p className="lead ">When buying a laptop, there are several key factors to consider
           to ensure you select the best device for your needs.</p>

             
        <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Purpose and Usage</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item variant="danger">Work: If you need a laptop for professional tasks like programming, graphic design, or video editing, 
      look for models with high-performance CPUs, ample RAM, and dedicated graphics cards.</ListGroup.Item>
      <ListGroup.Item variant="warning">Gaming: For gaming, a powerful GPU, high-refresh-rate display, and good cooling system are crucial.</ListGroup.Item>
      <ListGroup.Item variant="info">Everyday Use: For general tasks such as browsing, streaming, and office work, mid-range specifications will suffice.
      </ListGroup.Item>
       
    </ListGroup>
       


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> Performance Specifications</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item variant="danger">Processor (CPU): Determines the overall speed and efficiency. 
        Intel Core i5/i7 or AMD Ryzen 5/7 are good for most users.</ListGroup.Item>
      <ListGroup.Item variant="warning">Memory (RAM): A minimum of 8GB is recommended for smooth multitasking.
         16GB or more is ideal for intensive tasks.</ListGroup.Item>
      <ListGroup.Item variant="info">Storage: SSDs are faster and more reliable than HDDs.
         Aim for at least 256GB SSD for better performance and storage efficiency.</ListGroup.Item>
       
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header> Display Quality</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item variant="danger">Resolution: Full HD (1920x1080) is standard and sufficient for most users. Higher resolutions (QHD or 4K) 
        provide better clarity but can be more expensive and consume more battery. </ListGroup.Item>
      <ListGroup.Item variant="warning">Size: A 13-15 inch screen is portable and practical for most users.
         Larger screens are better for media and productivity but reduce portability. </ListGroup.Item>
      <ListGroup.Item variant="info">Panel Type: IPS panels offer better color accuracy 
        and viewing angles compared to TN panels. </ListGroup.Item>
       
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header> Portability and Battery Life</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item variant="danger"> Weight and Dimensions: If you travel frequently or need to carry your 
        laptop around, opt for a lightweight and slim model.</ListGroup.Item>
      <ListGroup.Item variant="warning">Battery Life: Look for laptops with a battery life of at least
         8 hours to ensure all-day usage without frequent recharging.  </ListGroup.Item>
      
       
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Connectivity and Ports</Accordion.Header>
        <Accordion.Body>
        <ListGroup>
      
      <ListGroup.Item variant="danger">Ports: Ensure the laptop has the necessary ports
         for your peripherals (USB-A, USB-C, HDMI, SD card reader, etc.). </ListGroup.Item>
      <ListGroup.Item variant="warning">Connectivity: Consider the latest Wi-Fi 6 for faster and more reliable wireless 
        connections, and Bluetooth 5.0 or higher for improved device pairing and data transfer.  </ListGroup.Item>
      
       
    </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Hero;
