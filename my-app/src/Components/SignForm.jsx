import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';



function SignForm() {
    return (

        <div className="container my-5  justify-content-center align-items-center">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-8">

                    <div className="display-6 fw-bold text-center">
                        <p>Sign in to your account to get started.</p>
                    </div>
                    <div className=''>
                        <Form>

                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>User Name</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1"> <i className="fas fa-user"></i></InputGroup.Text>
                                    <Form.Control type="text" placeholder="Enter Your Name" />
                                </InputGroup>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">  <i className="fas fa-envelope"></i></InputGroup.Text>
                                    <Form.Control type="email" placeholder="Enter email" />  </InputGroup>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>


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

                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long, contain letters and numbers,
                                    and must not contain spaces, special characters, or emoji.
                                </Form.Text>
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

export default SignForm;