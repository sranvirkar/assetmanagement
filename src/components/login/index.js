import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel , Card, Navbar, Form } from "react-bootstrap";
import createBrowserHistory from '../../helpers/history';
import TopNavbar from '../app-shared/navBar';

class Login extends Component {  
	constructor(props){
		super(props);
		this.state = {
			email: "",
			password: "",
			validated: false,
			loggedIn: false
		};
	 }

	validateForm = () => {
		const {email, password} = this.state;
		
		return email.length > 0 && password.length > 0;
	};

	handleSubmit = (event) => {
		const { email, password } = this.state;
		const form = event.currentTarget;
		
		event.preventDefault();
		event.stopPropagation();
		
		if (form.checkValidity() === true) {
		  if(email === "test@test.com" && password == "1234567"){
			this.setState({loggedIn: true});
			createBrowserHistory.push(`/home`,{});
		  }
		}

		this.setState({validated: true});
	};
  
	render() {
		const {email, password, validated} = this.state;
		
		return (
			<div className="LoginPage-Wrapper">
				<TopNavbar />
				<div className="CardStyle">
					<Card className="InnerCardStyle">
						  <Card.Body>
						  <Card.Title className="CardTitle">Login</Card.Title>

							  <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
								<FormGroup controlId="email">
								  <FormLabel>Email</FormLabel>
								  <FormControl
									autoFocus
									required
									type="email"
									value={email}
									onChange={(e) => { this.setState({email : e.target.value}) }}
								  />
								  <Form.Control.Feedback type="invalid">Enter Valid Username</Form.Control.Feedback>
								</FormGroup>
								<FormGroup controlId="password">
								  <FormLabel>Password</FormLabel>
								  <FormControl
									required
									value={password}
									onChange={(e) => { this.setState({password : e.target.value}) }}
									type="password"
								  />
								  <Form.Control.Feedback type="invalid">Enter Valid Password</Form.Control.Feedback>
								</FormGroup>
								<div className="button">
								<Button size="sm" variant="danger" type="submit">
								  Login
								</Button>
								</div>
							  </Form>
						  </Card.Body>
					  </Card>
				  </div>
			  </div>
		   
		  );
	};
  
}

export default Login;