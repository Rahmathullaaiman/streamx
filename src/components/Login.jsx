import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';
import { loginapi } from './services/allapi';
import { useNavigate } from 'react-router-dom';

function Login() {


  const[userdata,Setuserdata] = useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    Bio:"",
    //image:""
})

const navigate= useNavigate()

const handlelogin = async ()=>{
 // e.preventDefault()
  const{username,password}=userdata
  if( !username || !password){
      alert('please fill the form completely')
  }
  else{
      //api call
      const result = await loginapi(userdata)
      console.log(result); 
      if(result.status===200){
          //alert
          alert('login successfull')
          //store data
          sessionStorage.setItem('existuser',JSON.stringify(result.data. existuser))
          sessionStorage.setItem('token',result.data.token)


           //field blank
           Setuserdata({
              
              email:"",
              password:""

           })
          
          //navigate
          navigate('/')
         
      }
      else{
          alert(result.response.data)
      }

     
  }
}

console.log(userdata);
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
                {isSignUpActive && <div>
                  <Form.Control type="text" placeholder="FirstName"  value={userdata.firstname}onChange={(e)=>Setuserdata({...userdata,firstname:e.target.value})}  />
                  <Form.Control type="text" placeholder=" last Name" value={userdata.lastname}onChange={(e)=>Setuserdata({...userdata,lastname:e.target.value})} />
               
                  <Form.Control type="text" placeholder="bio" value={userdata.Bio}onChange={(e)=>Setuserdata({...userdata,Bio:e.target.value})} />
                 
                </div>
                }
                <Form.Control type="text" placeholder="username" value={userdata.username}onChange={(e)=>Setuserdata({...userdata,username:e.target.value})} />
                <Form.Control type="password" placeholder="Password" value={userdata.password}onChange={(e)=>Setuserdata({...userdata,password:e.target.value})} />
                

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
              <Button className="button2" id="signIn" onClick={handlelogin}>
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
