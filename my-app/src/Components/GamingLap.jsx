import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ExampleCarouselImage3 from '../Images/l1_.jpg';

function GamingLap() {
    return ( 
        <div className="container mt-4 pt-5 ">
<div className="display-5  text-center bg-light">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus.</p>
  <p className="lead ">Best Gaming Laptops..</p>
  </div>

            
        <div className="row lg-justify-content-start md-justify-content-center align-items-center">
        <div className="col-12 col-md-4 mt-3 d-flex justify-content-center">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ExampleCarouselImage3} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
</div>


<div className="col-12 col-md-4 mt-3 d-flex justify-content-center">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ExampleCarouselImage3} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
</div>


<div className="col-12 col-md-4 mt-3 d-flex justify-content-center">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ExampleCarouselImage3} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
</div>

<div className="col-12 col-md-4 mt-3 d-flex justify-content-center">
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ExampleCarouselImage3} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
</div>
            </div>
            </div>
     );
}

export default GamingLap;