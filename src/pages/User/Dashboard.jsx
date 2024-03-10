import React, { useEffect, useState } from 'react'
import './dashboard.css'
import Modal from 'react-bootstrap/Modal';
import Navbar from '../../components/Navbar/Navbar'
import addimage from '../../Assest/add-image.png'
import { Link, useNavigate } from 'react-router-dom'
import { addStreamAPI, getallUsersAPI } from '../../services/allapi'
import { BASE_URL } from '../../services/baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard() {
  const [existinguser,setExistingUser] = useState([])
  const [startlive,setStartlive] = useState(false)
  const[preview,setpreview]=useState("")
  const [token, setToken] = useState("")
  const [allusers, setallusers] = useState([])
  const [currentUser,setCurrentUser] = useState([])
const navigate = useNavigate()
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [loader,setLoader] = useState(false)





const[streamDetails,setStreamDSetails]=useState({
  title:"",
  description:"",
  tumbnile:"",
  url:"",
  category:""
})
//console.log(streamDetails);
// category
const handleCategoryChange = (event) => {
  const selectedValue = event.target.value;
  setStreamDSetails((prevStreamDetails) => ({
    ...prevStreamDetails,
    category: selectedValue
  }));
};

useEffect(() => {
  if (streamDetails.tumbnile) {
    setpreview(URL.createObjectURL(streamDetails.tumbnile))
  }
}, [streamDetails.tumbnile])

useEffect(()=>{
  if(sessionStorage.getItem('existinguser')){
   setExistingUser(JSON.parse(sessionStorage.getItem('existinguser')))
   // console.log(existinguser);
    setToken(existinguser.access)
  }
},[existinguser])


const handleADDstream = async () => {

  const { title, description, category, tumbnile, url } = streamDetails;
  if (!title || !description || !category || !tumbnile) {
    toast.info('something is missing');
  } else {
    setLoader(true)
    const reqBody = new FormData()
    reqBody.append("title", title)
    reqBody.append("description", description)
    reqBody.append("category", category)
    reqBody.append("tumbnile", tumbnile)
    reqBody.append("url", url)

    if (token) {
      const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
      };
      

      
        const result = await addStreamAPI( reqBody,reqHeader);
        if (result.status === 201) {
          toast.success('stream added successfully');
          setStreamDSetails({
              title:"",
              description:"",
              tumbnile:"",
              url:'',
              category:''
             })
             setpreview("")
             setLoader(false)
         // console.log(result);
        }
         else {
          toast.warning('Something went wrong, try again later');
          setStreamDSetails({
              title:"",
              description:"",
              tumbnile:"",
              url:'',
              category:''
             })
             setpreview("")
             setLoader(false)
          //console.log(result);
        }
     
      
    }
    else{
      toast.error(`Session time out,please Login`)
      
    }
  }
};









  const getusers = async () => {
    const result = await getallUsersAPI()
    setallusers(result.data)
  }
  const searchid = existinguser.id

  useEffect(() => {
    const fetchData = async () => {
      await getusers(); // Fetch all users
      const igotuser = allusers.find((user) => user.id === searchid);
      if (igotuser) {
        setCurrentUser(igotuser);
      }
    };
  
    fetchData();
  // }, []);
 }, [searchid, allusers]);
    console.log(currentUser);

   const handlelogout = ()=>{
   
    sessionStorage.removeItem("existinguser")
    sessionStorage.removeItem("token")
   navigate('/')
   window.location.reload();
  }
  return (
    <>
   <Navbar/>
    <div className='userpage'>
        <div className='dashboard'>
            <div className='dashtitle hr'>
                <h3 className='ms-5'>DASHBOARD</h3>
                <hr />
            </div>
        {startlive?    <div className='livestream'>
           <div className='share-screen'>
             Click here to share screen
           </div>
         </div>
          :
            <div className='livestream'>
                <div className='livestreamtitle'>
                    <h3>Fill up the Details to start Streaming</h3>
                    </div>
                    <div className='startlive'>
                    
  <form className='fillform'>
  <div class="form__group field">
    <input type="input" class="form__field" required="" onChange={(e)=>setStreamDSetails({...streamDetails,title:e.target.value})} value={streamDetails.title}/>
    <label for="name" class="form__label">Title</label>
</div>
<div class="form__group field">
    <input type="input" class="form__field" required="" onChange={(e)=>setStreamDSetails({...streamDetails,description:e.target.value})} value={streamDetails.description}/>
    <label for="name" class="form__label">Description</label>
</div>

<div  class="category-div">
      <label className='dropdown' htmlFor="category">Select a category:</label>
      <select id="category" onChange={handleCategoryChange} value={streamDetails.category}>
        <option value="">Select...</option>
        <option value="1">Games</option>
        <option value="2">IRL</option>
        <option value="3">Esports</option>
        <option value="4">Music</option>
        <option value="5">Creative</option>
      </select>


    </div>
    <div>
    <h5 className='mt-3'>Add Thumbnail</h5>
    </div>
    <label for="file" class="custum-file-upload">
      
<div class="addimage">

<img src={preview?preview:`${addimage}`} alt="" style={{width:preview?'100%':""}}/>
</div>
   <input id="file" type="file" onChange={(e)=>setStreamDSetails({...streamDetails,tumbnile:e.target.files[0]})} />
</label>


  </form>

                    </div>
<button className="startbtn" onClick={handleADDstream}>
              Start Stream
              </button>
            </div>
            
            }
             {loader &&   <div class="loader">
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

        <div>
        <div className='profile'>
             <div className='profileimg'> 
<div class="profileaddimage">
<img  
src={`${BASE_URL}/${currentUser.profile_picture}`} 
alt=""/>

</div>
                  
                </div>
                <div className='mt-5 user-details'>
                  <h2>{existinguser.username}</h2>
                 <div className='d-flex'>
                    <h6>{currentUser.first_name}</h6>
                    <h6>{currentUser.last_name}</h6>
                 </div>
                  <h6>{existinguser.bio}</h6>
                </div>

                <Link to={'/profileupdate'}><button className='editbtn'>edit profile</button></Link>
                <Link to={''}><button onClick={handleShow} className='logoutbtn'>Logout</button></Link>
   
            </div>
        </div>
    </div>




    <Modal show={show} onHide={handleClose}>
     <div  style={{
     border:'2px solid white'
     }}>
          <Modal.Header closeButton
          style={{
            color:'white',
            backgroundColor:'rgb(32, 31, 31)'
           }}>
          
            <Modal.Title>Logout</Modal.Title>
          </Modal.Header>
       <div style={{
        height:'200px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(32, 31, 31) '
       }}>
       <button onClick={handleClose} className='updatbtn m-5'>Cancel</button>
       <button onClick={handlelogout} className='closbtn m-5'>Logout</button>
  
       </div>
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
    </>
  )
}

export default Dashboard