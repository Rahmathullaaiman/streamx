import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './auth.css'

import { loginAPI, registerAPI } from '../../services/allapi';

function Auth() {

  const [loader,setLoader] = useState(false)

    const[userdata,Setuserdata] = useState({
        first_name:"",
        last_name:"",
        username:"",
        email:"",
        password:"",
        bio:""
        //profileimg:""
    })
    const [user,setUser] = useState({})
    const navigate= useNavigate()
      // console.log(userdata);
    // register
    const handleregister = async (e)=>{
 
        e.preventDefault()
         const{first_name,last_name,username,bio,email,password}=userdata
         if(!first_name || !last_name || !username || !bio || !email || !password){
             toast.info('please fill the form completely')
         }
         else{
          setLoader(true)
             //api call
          const result = await registerAPI(userdata)
          if(result.status == 200){
            setLoader(false)
            toast.success('Registration success')
           setTimeout(() => {
            document.getElementById('container').classList.remove('right-panel-active');
           
           }, 1500);
           setTimeout(() => {
            window.location.reload();
           }, 1500);
            Setuserdata({
                first_name:"",
                last_name:"",
                username:"",
                email:"",
                password:"",
                bio:"",
            })
           
          }
          else{
            toast.error('Registration failed')
            setLoader(false)
            Setuserdata({
                first_name:"",
                last_name:"",
                username:"",
                email:"",
                password:"",
                bio:"",
            })
           // console.log(result);
          }
          
         }
       }
    const handlelogin = async (e)=>{
     e.preventDefault()
      const{username,password}=userdata
      if( !username || !password){
          toast.info('please fill the form completely')
      }
      else{
        setLoader(true)
        const result = await loginAPI(userdata)
        if(result.status == 200){
          toast.success('login success')
          setLoader(false)
        sessionStorage.setItem("existinguser",JSON.stringify(result.data))
        sessionStorage.setItem("token",result.data.access)
        setTimeout(() => {
          navigate('/')
        }, 2000);
          Setuserdata({
            username:"",
              password:""
          })
         // console.log(result);
        }
        else{
          toast.error('Login Failed')
          setLoader(false)
          Setuserdata({
            username:"",
            password:""
        })
          //console.log(result);
        }
      }
    }
    useEffect(()=>{
      if(sessionStorage.getItem('existinguser')){
        setUser(JSON.parse(sessionStorage.getItem('existinguser')))
      }
    },[])

      const [isSignUpActive, setIsSignUpActive] = useState(false);
    
      useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
    
        if (signUpButton && signInButton && container) {
          const handleSignUpClick = () => {
            container.classList.add('right-panel-active');
            Setuserdata({
              first_name:"",
              last_name:"",
              username:"",
              email:"",
              password:"",
              bio:"",
          })
          };
    
          const handleSignInClick = () => {
            Setuserdata({
              first_name:"",
              last_name:"",
              username:"",
              email:"",
              password:"",
              bio:"",
          })
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
              
            <div>
            <Link to={'/'} className='backtohome'><i class="fa-solid fa-arrow-left me-2"></i>Back to home</Link>
            </div>
              <Form>
                
                <h1>{isSignUpActive ? 'Create Account' : 'Sign In'}</h1>
              
                <span></span>
                {isSignUpActive && 
            <>
            
            <div className="group">
      <input required type="text" className="input" onChange={(e)=>Setuserdata({...userdata,first_name:e.target.value})}  value={userdata.first_name} maxlength="10"/>
    
    
      <label>First Name</label>
    </div>

    <div className="group">
      <input required type="text" className="input" onChange={(e)=>Setuserdata({...userdata,last_name:e.target.value})} value={userdata.last_name}  maxlength="10"/>
    
    
      <label>Last Name</label>
    </div>

    <div className="group">
      <input required type="text" className="input" onChange={(e)=>Setuserdata({...userdata,bio:e.target.value})}  value={userdata.bio}  maxlength="10"/>
    
    
      <label>Bio</label>
    </div>

    <div className="group">
      <input required type="email" className="input"  onChange={(e)=>Setuserdata({...userdata,email:e.target.value})} value={userdata.email}/>
    
    
      <label>Email</label>
    </div>
              
            </>
                }

<div className="group">
      <input required type="text" className="input" onChange={(e)=>Setuserdata({...userdata,username:e.target.value})} value={userdata.username}  maxlength="10"/>
    
    
      <label>Username</label>
    </div>
    <div className="group">
      <input required type="password" className="input" onChange={(e)=>Setuserdata({...userdata,password:e.target.value})}  value={userdata.password}  maxlength="10"/>
    
    
      <label>Password</label>
    </div>  
                {isSignUpActive ? 
               <button onClick={handleregister} className={isSignUpActive ? 'signupghost' : 'signupghost2'}>sign up</button>
                 :
                 <button onClick={handlelogin} className='signupghost'>sign in</button>
                 }
               
               
              </Form>
              {loader &&   <div class="loader"
        style={{
        
        margin:'-350px 0px 0px 350px'
        }}
        >
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
    <div class="bar5"></div>
    <div class="bar6"></div>
    <div class="bar7"></div>
    <div class="bar8"></div>
    <div class="bar9"></div>
    <div class="bar10"></div>
    <div class="bar11"></div>
    <div class="bar12"></div>
</div>}
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
      <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default Auth