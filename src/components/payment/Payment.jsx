import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './payment.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getallUsersAPI, subscribeAPI } from '../../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
 
function Payment() {
  const [showModal, setShowModal] = useState(true);
  const { showuserid } = useParams();
  const [token, setToken] = useState("")
  const [existinguser,setexistinguser] = useState({})
  const [loader,setLoader] = useState(false)
  const navigate = useNavigate()
  const openModal = () => {
    setShowModal(true);
  };

  const [allusers, setallusers] = useState([])
  const [currentUser,setCurrentUser] = useState([])
  const[payment,setPayment]=useState({
   currency:"USD",
   amount:"1"
})
//console.log(payment);
  const userid = showuserid
  useEffect(() => {
    if (sessionStorage.getItem('existinguser')) {
      const existinguser = JSON.parse(sessionStorage.getItem('existinguser'));
   //   console.log(existinguser);
      setToken(existinguser.access);
    }
  }, []);
  const getusers = async () => {
    const result = await getallUsersAPI()
    setallusers(result.data)
  }
 // console.log(allusers);
  useEffect(() => {
    getusers();
  }, []);

  useEffect(() => {
    // Find the user with the specified userid
    const user = allusers.find((user) => user.id == userid);

    setCurrentUser(user || {}); 
  }, [allusers, userid]); 
  


// console.log(currentUser);
const handlepayment = async()=>{
const {currency,amount} = payment
setLoader(true)
const reqBody = new FormData()
reqBody.append("currency",currency)
reqBody.append("amount",amount)

  if(token) { 
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }

    const result = await subscribeAPI(userid,reqBody,reqHeader)
    if(result.status == 200){
      toast.success('Payment Sucessful')
      swal(`You have been Subscribed to ${currentUser.username}`,
        {
        button: {
          text: "Close",
        },
      });
      setLoader(false)
      setTimeout(() => {
        navigate(`/userprofile/${userid}`)
      }, 5000);
    }
    // else if(result.status == 400){
    //   toast.warning('ALREADY SUBSCRIBED')
    // }
    else{
      toast.error(`Something went wrong`)
      setLoader(false)
     
    }
  }
    else {
      console.error('Token is empty!');
      setLoader(false)

    }
}
  return (
    <div>
    

      <Modal show={showModal} centered>
        <Modal.Header>
          <Modal.Title>SUBSCRIBE to {currentUser.username}</Modal.Title>
        </Modal.Header>
       
<div style={{
  height:'300px',
  display:'flex',
  flexDirection:'column',
  backgroundColor:'black'
}}>
  
                                
  
    <div  class="category-div"style={{
        width:'420px'
      }}>
        <label className='dropdown' htmlFor="category">Select a Currency:</label>
        <select id="category">
         
          <option value="1">USD</option>
        </select>
      </div>
      <div  class="category-div" style={{
        width:'420px'
      }}>
        <label className='dropdown' htmlFor="category">Select a Plan:</label>
        <select id="category" style={{
        margin:'0px 0px 0px 30px'
      }}>
        
          <option value="1">$1</option>
        </select>
      </div>
<div className='button-div'>

<Link to={`/userprofile/${userid}`}>  <button className='cancelbtn'>Cancel</button></Link>
   <Link> <button className='paybtn' onClick={handlepayment}>PAY</button></Link>
</div>

          {loader &&   <div class="loader"
          style={{
            margin:'-150px 0px 0px 220px',
          
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

      </Modal>



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
    </div>
  );
}

export default Payment;
