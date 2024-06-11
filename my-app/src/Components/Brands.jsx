import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import acer from '../Images/acer';
 

function Brands() {
    return (
        <div>

<Container className='my-3'>
<div className="display-5  text-center bg-light">
        <p>Popular laptop brands include</p>
        <p className="lead ">Best Laptops Brands</p>
      </div>
            <Row>
                <Col xs={6} md={3} className="d-flex align-items-center justify-content-center">
                    <Image src="images/acer.jpg" rounded style={{ maxWidth: '70%', height: 'auto',boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', }} />
                </Col>
                <Col xs={6} md={3} className="d-flex align-items-center justify-content-center">
                    <Image src="images/msi.jpg" rounded style={{ maxWidth: '70%', height: 'auto',boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' }} />
                </Col>
                <Col xs={6} md={3} className="d-flex align-items-center justify-content-center">
                    <Image src="images/dell.png" rounded style={{ maxWidth: '70%', height: 'auto',boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' }}  />
                </Col>
                <Col xs={6} md={3} className="d-flex align-items-center justify-content-center">
                    <Image src="images/lenovo.png" rounded style={{ maxWidth: '70%', height: 'auto',boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)' }}  />
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Brands;