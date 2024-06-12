 
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Footer from "../Components/Footer";

import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';



function Profile() {

    const [userName, setUserName] = useState('not');
    const [userEmail, setUserEmail] = useState('not');
    const token = Cookies.get('token');
  
    useEffect(() => {
        const getinfo = async () => {
            if (!token) {
                console.log('No token found, please login.');
                return;
            }
            
            try {
                const response = await axios.get('http://localhost:4000/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response);
                setUserName(response.data.name);
                setUserEmail(response.data.email);
            } catch (error) {
                console.log(error);
            }
        };

        getinfo();
    }, [token]); // Call getinfo() only when token changes


    return (  
        <div>

<Container className="mt-3">
      <Row className="justify-content-center align-items-center my-3">   

        <Col xs={6} md={6} className="justify-content-center align-items-center text-center">
        <Image src="images/acer.jpg" 
        style={{width:'80%'}}roundedCircle/>
        </Col>

        <Col xs={10} md={6} className="justify-content-center align-items-center text-center my-3">
        <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

        <ListGroup className="gap-3">
      <ListGroup.Item variant="success">{userName}</ListGroup.Item>
      <ListGroup.Item variant="danger">{userEmail}</ListGroup.Item>
      <ListGroup.Item variant="warning">User</ListGroup.Item>
      <ListGroup.Item variant="info">Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Ea, animi.</ListGroup.Item>
       </ListGroup>
        </Col>

        <Col xs={10} md={7} className="justify-content-between align-items-center text-center my-3">
        <Button variant="warning">Edit profile</Button>{' '}
      <Button variant="danger" className="mx-3">Logout</Button>{' '}
        </Col>

        
         
      </Row>
    </Container>

    <Footer/>
        </div>
    );
}

export default Profile;