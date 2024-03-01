import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';

function Login() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      const handleSignUpClick = () => {
        container.classList.add('right-panel-active');
      };

      const handleSignInClick = () => {
        container.classList.remove('right-panel-active');
      };

      signUpButton.addEventListener('click', handleSignUpClick);
      signInButton.addEventListener('click', handleSignInClick);

      return () => {
        signUpButton.removeEventListener('click', handleSignUpClick);
        signInButton.removeEventListener('click', handleSignInClick);
      };
    }
  }, []);

  return (
    <>
      <Container id="container">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className={`form-container ${isSignUpActive ? 'sign-up-container' : 'sign-in-container'}`}>
              <Form>
                <h1>{isSignUpActive ? 'Create Account' : 'Sign In'}</h1>
                <div className="social-container">
                  
                </div>
                <span></span>
                {isSignUpActive && <Form.Control type="text" placeholder="Name" />}
                <Form.Control type="email" placeholder="Email" />
                <Form.Control type="password" placeholder="Password" />
                <Button className={isSignUpActive ? 'signupghost' : 'signupghost2'}>
                  {isSignUpActive ? 'Sign Up' : 'Sign In'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${isSignUpActive ? 'active' : ''}`}>
              
              <h1>Welcome Back!</h1>
              <p></p>
              <Button className="button2" id="signIn" onClick={() => setIsSignUpActive(false)}>
                Sign In
              </Button>
            </div>
            <div className={`overlay-panel overlay-right ${isSignUpActive ? '' : 'active'}`}>
              <h1>NEW HERE,CREATE AN ACCOUNT</h1>
              <p>Enter your details and start the journey with us</p>
              <Button className="button2" id="signUp" onClick={() => setIsSignUpActive(true)}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
