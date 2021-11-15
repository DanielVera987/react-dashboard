import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button, FloatingLabel, Form } from 'react-bootstrap';

import './Register.scss';

const Register = () => {
    return (
        <Container>
            <div className="Register">
                <Card>
                    <Card.Header as="h5">React Dashboard</Card.Header>
                    <Card.Body>
                        <Card.Title className="font-weight-600 mb-4">
                            Register
                        </Card.Title>
                        <FloatingLabel
                            controlId="name"
                            label="Full name"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Full name"
                            ></Form.Control>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="Email"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="Password"
                            label="Password"
                            className="mb-3"
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="ConfirmPassword"
                            label="Confirm Password"
                        >
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </FloatingLabel>
                        <Button
                            variant="primary"
                            className="d-block w-100 mt-3"
                        >
                            Submit
                        </Button>
                    </Card.Body>
                </Card>
                <div className="Register-links mt-3">
                    <Link to="/login">Do you have an account?</Link>
                </div>
            </div>
        </Container>
    );
};

export default Register;
