import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; // Removed curly braces
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Badge} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';


function NavBar() {
    var userName;
    var itemCount;


  return (
    <Navbar expand="lg" className="  bg-body-tertiary " fixed="top">
      <Container>
        <Navbar.Brand href="#home">MaSSLaptop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            {/* <Nav.Link href="/link"></Nav.Link> */}
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/profile" className='d-lg-none'>profile</Nav.Link>
            <Nav.Link href="/cart" className='d-lg-none'>cart</Nav.Link>

           

            <NavDropdown title="Sign" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Sign">Sign</NavDropdown.Item>
              <NavDropdown.Item href="/Login">
                Login
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="/Home">LogOut</NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item href="/Home">
              LogOut
              </NavDropdown.Item>
            </NavDropdown>

           
            
          </Nav>
        </Navbar.Collapse>

        <Form className="d-lg-flex d-none ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

        


         
            
           <Nav.Link href="/cart" className="d-lg-flex d-none align-items-center mx-3 ">
      <FaShoppingCart size={24} />
      {itemCount > 0 && <Badge pill bg="danger" className="ms-1">{itemCount}</Badge>}
         </Nav.Link>

         <Nav.Link href="/profile" className="d-lg-flex d-none align-items-center mx-3">
      <FaUserCircle size={24} />
      {userName && <span className="ms-2">{userName}</span>}
        </Nav.Link>
          
          

      </Container>
    </Navbar>
  );
}

export default NavBar;
