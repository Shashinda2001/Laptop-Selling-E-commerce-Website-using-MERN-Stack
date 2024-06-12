import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';




function LoginForm() {



    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event)=>{

        const url="http://localhost:4000/users/login";
    
        event.preventDefault();
    
        try{
    
          const submitData={
             
            email:userEmail,
            password:userPassword
          };
          const response =await axios.post(url,submitData);
          console.log(response);
          Cookies.set('token', response.data.token, { expires: 1 });

           navigate('/');
        }
        catch(error){
    console.log(error);
        }
      }

    return (

        <div className="container my-5  justify-content-center align-items-center">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-8">

                    <div className="display-4 fw-bold text-center">
                    <p className="lead">Welcome to our platform! We're glad to have you here. Please enter your credentials
                         to access your account and explore everything we have to offer.</p>
                        <p>Login</p>
                       
                    </div>
                    <div className=''>
                        <Form onSubmit={handleSubmit}>

                             
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">  <i className="fas fa-envelope"></i></InputGroup.Text>
                                    <Form.Control type="email"  name='userEmail' placeholder="Enter email"  value={userEmail}
                    onChange={(event) => {
                        setUserEmail(event.target.value)
                    }}/>  </InputGroup>
                                 


                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"> <i className="fas fa-lock"></i></InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                         name='userPassword'
                                         value={userPassword}
                                         onChange={(event) => {
                                             setUserPassword(event.target.value)
                                         }}
                                    />
                                </InputGroup>

                                
                            </Form.Group>
                            <div className='justify-content-center align-items-center text-center'>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </div >

                        </Form>
                    </div>


                </div>

            </div>


        </div>


    );
}

export default LoginForm;