import React from 'react';
import { Container, Card, Button, FloatingLabel, Form } from 'react-bootstrap';

import './Login.scss';

const Login = () => {
    return (
        <Container>
            <div className="Login">
                <Card>
                    <Card.Header as="h5">React Dashboard</Card.Header>
                    <Card.Body>
                        <Card.Title className="font-weight-600 mb-4">
                            Login
                        </Card.Title>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
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
            </div>
        </Container>
    );
};

export default Login;
