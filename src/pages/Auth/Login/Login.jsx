import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from 'formik';

import ROUTE from '@config/routes.json';

import { Container, Card, Button, Form, FormGroup } from 'react-bootstrap';
import AuthContext from '@context/authContext';
import './Login.scss';

const Login = () => {
	const navigate = useNavigate();
	const { handleUserLogin } = useContext(AuthContext);

	useEffect(() => {
		const currentUser = localStorage.getItem('currentUser');
		if (currentUser !== null) {
			navigate(ROUTE.HOME);
			return;
		}
	}, []);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required("Campo Requerido")
				.email("Correo Electronico Invalido")
				.max(255, `Máximo 255 caracteres`),
			password: Yup.string()
				.required("Campo Requerido")
				.min(5, `Mínimo 5 caracteres`)
		}),
		onSubmit: values => {
			handleUserLogin(values);
		}
	});

	return (
			<Container>
					<div className="Login">
							<Card>
									<Card.Header as="h5">React Dashboard</Card.Header>
									<Card.Body>
											<Card.Title className="font-weight-600 mb-4">
													Login
											</Card.Title>

											<form onSubmit={formik.handleSubmit}>

												<Form.Group className="mb-3" controlId="formBasicEmail">
													<Form.Label>Email address</Form.Label>
													<Form.Control
														type="email"
														placeholder="name@example.com"
														name="email"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.email}
													/>

													{formik.touched.email && formik.errors.email ? (
														<Form.Text className="text-muted message-error">
															{formik.errors.email}
														</Form.Text>
													) : null}
												</Form.Group>


												<Form.Group className="mb-3" controlId="formBasicPassword">
													<Form.Label>Password</Form.Label>
													<Form.Control
														type="password"
														name="password"
														onChange={formik.handleChange}
														onBlur={formik.handleBlur}
														value={formik.values.password}
													/>

													{formik.touched.password && formik.errors.password ? (
														<Form.Text className="text-muted message-error">
															{formik.errors.password}
														</Form.Text>
													) : null}
												</Form.Group>

												<Form.Check type="checkbox" id="checkbox" label="Remember Password" />

												<Button variant="primary" className="d-block w-100 mt-3" type="submit" >
													Submit
												</Button>
											</form>
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
