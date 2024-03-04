import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form} from 'react-bootstrap';
import './login.css';

function Login() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  useEffect(() => {
    const signUpbutton = document.getElementById('signUp');
    const signInbutton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpbutton && signInbutton && container) {
      const handleSignUpClick = () => {
        container.classList.add('right-panel-active');
      };

      const handleSignInClick = () => {
        container.classList.remove('right-panel-active');
      };

      signUpbutton.addEventListener('click', handleSignUpClick);
      signInbutton.addEventListener('click', handleSignInClick);

      return () => {
        signUpbutton.removeEventListener('click', handleSignUpClick);
        signInbutton.removeEventListener('click', handleSignInClick);
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
                {isSignUpActive && 
            <>
              
                    <Form.Control className='inputfield' type="text" placeholder="First Name" />
                    <Form.Control className='inputfield' type="text" placeholder="Last Name" />
                    <Form.Control className='inputfield' type="text" placeholder="Bio" />
            </>
                }
                <Form.Control className='inputfield' type="email" placeholder="Email" />
                <Form.Control className='inputfield' type="password" placeholder="Password" />
                <button className={isSignUpActive ? 'signupghost' : 'signupghost2'}>
                  {isSignUpActive ? 'Sign Up' : 'Sign In'}
                </button>
                <div className=''>
            <Link to={'/'} className='backtohome'><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
            </div>
              </Form>
              
            </div>
           
          </Col>
        </Row>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${isSignUpActive ? 'active' : ''}`}>
              
              <h1>Welcome Back!</h1>
              <p></p>
              <button className="button2" id="signIn" onClick={() => setIsSignUpActive(false)}>
                Sign In
              </button>
            </div>
            <div className={`overlay-panel overlay-right ${isSignUpActive ? '' : 'active'}`}>
              <h1>NEW HERE,CREATE AN ACCOUNT</h1>
              <p>Enter your details and start the journey with us</p>
              <button className="button2" id="signUp" onClick={() => setIsSignUpActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;


