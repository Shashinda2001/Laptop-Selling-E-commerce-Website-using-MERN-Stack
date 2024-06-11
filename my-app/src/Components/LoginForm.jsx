import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';



function LoginForm() {
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
                        <Form>

                             
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">  <i className="fas fa-envelope"></i></InputGroup.Text>
                                    <Form.Control type="email" placeholder="Enter email" />  </InputGroup>
                                 


                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"> <i className="fas fa-lock"></i></InputGroup.Text>
                                    <Form.Control
                                        type="password"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    />
                                </InputGroup>

                                
                            </Form.Group>
                            <div className='justify-content-center align-items-center text-center'>
                                <Button variant="primary" type="submit">
                                    Submit
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