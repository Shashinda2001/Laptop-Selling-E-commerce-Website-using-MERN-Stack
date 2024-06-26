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
import LogoutModel from './LogoutModel';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
// import { RiH1 } from 'react-icons/ri';




function NavBar() {
    var userName;
    var itemCount;
    const t = Cookies.get('token');
    const [token, setToken] = useState(null);
    
    useEffect(() => {
      if (!t) {
        console.log('No token found, please login.');
        
        return;
    }
    else{
      setToken(t);
    }

    }, [token,t]); // Call getinfo() only when token changes

  


  return (
    <Navbar expand="lg" className="bg-body-tertiary " fixed="top" >
      <Container>
        <Navbar.Brand href="#home">MaSSLaptop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/link"></Nav.Link> */}
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/profile" className='d-lg-none'>profile</Nav.Link>
            <Nav.Link href="/cart" className='d-lg-none'>cart</Nav.Link>

           

            <NavDropdown title="Sign" id="basic-nav-dropdown">
              <NavDropdown.Item href="/SignForm">Sign</NavDropdown.Item>
              <NavDropdown.Item href="/LoginForm">
                Login
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="/Home">LogOut</NavDropdown.Item>
              <NavDropdown.Divider /> */}
            <NavDropdown.Item href="">
  {token ? <LogoutModel /> : null}
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
