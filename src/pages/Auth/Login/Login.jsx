import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Card, Button, FloatingLabel, Form } from 'react-bootstrap';
import AuthContext from '@context/authContext';
import './Login.scss';

const Login = () => {
	const navigate = useNavigate();
	const { handleUserLogin, authState } = useContext(AuthContext);

	useEffect(() => {
		const currentUser = localStorage.getItem('currentUser');
		if (currentUser !== null) {
			navigate('/');
			return;
		}
	}, []);

	const handleSubmit = () => {
		const data = {
			username: "daniel",
			token: "fffff"
		};
		handleUserLogin(data);
	}

    return (
        <Container>
            <div className="Login">
                <Card>
                    <Card.Header as="h5">React Dashboard {authState ? 'true' : 'false'}</Card.Header>
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
                            className="mb-3"
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </FloatingLabel>
                        <Form.Check
                            type="checkbox"
                            id="checkbox"
                            label="Remember Password"
                        />
                        <Button
                            variant="primary"
                            className="d-block w-100 mt-3"
							onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Card.Body>
                </Card>
                <div className="Login-links mt-3">
                    <Link to="/register">You do not have an account?</Link>
                </div>
            </div>
        </Container>
    );
};

export default Login;
