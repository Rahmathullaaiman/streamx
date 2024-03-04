import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { loginAPI, registerAPI } from '../services/allapi';

function Auth() {


    const[userdata,Setuserdata] = useState({
        first_name:"",
        last_name:"",
        username:"",
        email:"",
        password:"",
        bio:""
        //image:""
    })
    const [user,setUser] = useState({})
    const navigate= useNavigate()
        
    // register
    const handleregister = async (e)=>{
 
        e.preventDefault()
         const{first_name,last_name,username,bio,email,password}=userdata
         if(!first_name || !last_name || !username || !bio || !email || !password){
             alert('please fill the form completely')
         }
         else{
             //api call
          const result = await registerAPI(userdata)
          if(result.status == 200){
            alert('Registration success')
            Setuserdata({
                first_name:"",
                last_name:"",
                username:"",
                email:"",
                password:"",
                bio:"",
            })
            console.log(result);
          }
          else{
            alert('failed')
            Setuserdata({
                first_name:"",
                last_name:"",
                username:"",
                email:"",
                password:"",
                bio:"",
            })
            console.log(result);
          }
          
         }
       }
    const handlelogin = async (e)=>{
     e.preventDefault()
      const{username,password}=userdata
      if( !username || !password){
          alert('please fill the form completely')
      }
      else{
        const result = await loginAPI(userdata)
        if(result.status == 200){
          alert('login success')
          sessionStorage.setItem("existinguser",JSON.stringify(result.data))
        sessionStorage.setItem("token",result.data.access)
        setTimeout(() => {
          navigate('/')
        }, 1600);
          Setuserdata({
            username:"",
              password:""
          })
          console.log(result);
        }
        else{
          alert('failed')
          Setuserdata({
            username:"",
            password:""
        })
          console.log(result);
        }
      }
    }
    useEffect(()=>{
      if(sessionStorage.getItem('existinguser')){
        setUser(JSON.parse(sessionStorage.getItem('existinguser')))
      }
    },[])
    console.log(user.refresh);
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
                {isSignUpActive && 
            <>
              
                    <Form.Control className='inputfield' type="text" placeholder="First Name"onChange={(e)=>Setuserdata({...userdata,first_name:e.target.value})}  value={userdata.first_name} />
                    <Form.Control className='inputfield' type="text" placeholder="Last Name" onChange={(e)=>Setuserdata({...userdata,last_name:e.target.value})} value={userdata.last_name}/>
                    <Form.Control className='inputfield' type="text" placeholder="bio" onChange={(e)=>Setuserdata({...userdata,bio:e.target.value})}  value={userdata.bio}/>
                    <Form.Control className='inputfield' type="email" placeholder="Email" onChange={(e)=>Setuserdata({...userdata,email:e.target.value})} value={userdata.email}/>
            </>
                }
                <Form.Control className='inputfield' type="email" placeholder="username" onChange={(e)=>Setuserdata({...userdata,username:e.target.value})} value={userdata.username}/>
                <Form.Control className='inputfield' type="password" placeholder="Password" onChange={(e)=>Setuserdata({...userdata,password:e.target.value})}  value={userdata.password}/>
                {isSignUpActive ? 
               <button onClick={handleregister} className={isSignUpActive ? 'signupghost' : 'signupghost2'}>sign up</button>
                 :
                 <button onClick={handlelogin} className='signupghost'>sign in</button>
                 }
               
               
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
  )
}

export default Auth