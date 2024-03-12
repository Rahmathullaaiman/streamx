import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { getallUsersAPI, updateProfileAPI } from '../../services/allapi';
import { BASE_URL } from '../../services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profilepreview, setProfilepreview] = useState("")
  const [existingimage, setexistingimage] = useState("")
  const [token, setToken] = useState("")
  const [existinguser, setExistingUser] = useState([])
  const [allusers, setallusers] = useState([])
  const [currentUser,setCurrentUser] = useState([])
  const navigate = useNavigate()
  const [loader,setLoader] = useState(false)


  const [profileDetails, setProfileDetails] = useState({
    first_name: "",
    last_name: "",
    bio: "",
    profile_picture: ""
  })
    // useEffect(() => {
    //   if (profileDetails.profile_picture) {
    //     setProfilepreview(URL.createObjectURL(profileDetails.profile_picture))
    //   }
    // }, [profileDetails.profile_picture])

  useEffect(() => {
    if (sessionStorage.getItem('existinguser')) {
      setExistingUser(JSON.parse(sessionStorage.getItem('existinguser')))
      setToken(existinguser.access)
    }
  }, [allusers])
  const getusers = async () => {
    const result = await getallUsersAPI()
    setallusers(result.data)
  }
  //console.log(token);
  const searchid = existinguser.id
  const searchkey = 'id'

  useEffect(() => {
    const fetchData = async () => {
      await getusers(); // Fetch all users
      const igotuser = allusers.find((user) => user.id === searchid);
      if (igotuser) {
        setCurrentUser(igotuser);
        setexistingimage(`${BASE_URL}/${currentUser.profile_picture}`);
      }
    };
    fetchData();
  }, [allusers]);
  
  //console.log(existingimage);
  
  useEffect(() => {
    // console.log('existinguser:', existinguser);
    // console.log('currentUser:', currentUser);
    // console.log('existingimage:', existingimage);
    setProfileDetails({
      first_name: existinguser ? existinguser.first_name : "",
      last_name: existinguser ? existinguser.last_name : "",
      bio: existinguser ? existinguser.bio : "",
      profile_picture: existingimage ? existingimage : ""
    });
  }, [existinguser, existingimage]);
  
  useEffect(() => {
    if (existingimage) {
      setProfilepreview(existingimage);
    } else if (profileDetails.profile_picture) {
      setProfilepreview(URL.createObjectURL(profileDetails.profile_picture));
    }
  }, [existingimage, profileDetails.profile_picture]);
  

console.log(profileDetails);

  //update profile
  const handleUpdateprofile = async () => {
    const { first_name, last_name, bio, profile_picture } = profileDetails

    if (!first_name || !last_name || !bio || !profile_picture) {
      toast.info(`Something is missing`)
    }
    else {
      setLoader(true)
      const reqBody = new FormData()
      reqBody.append("first_name", first_name)
      reqBody.append("last_name", last_name)
      reqBody.append("bio", bio)
      reqBody.append("profile_picture",profile_picture)

      const userid = existinguser.id
      if (token) {

        if(profilepreview){
          const reqHeader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`,
          };
          const result = await updateProfileAPI(userid, reqBody, reqHeader)
          if (result.status == 200) {
            setLoader(false)
            toast.success(`profile Updated`)
            setTimeout(() => {
              navigate('/dashboard')
            }, 200);
            //console.log(result);
          }
          else {
            setLoader(false)
            toast.error('something went wrong,Try again later')
            //console.log(result);
          }
        }
        else{
          const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          };
          const result = await updateProfileAPI(userid, reqBody, reqHeader)
          if (result.status == 200) {
            setLoader(false)
            toast.success(`profile Updated`)
            setTimeout(() => {
              navigate('/dashboard')
            }, 200);
            //console.log(result);
          }
          else {
            setLoader(false)
            toast.error('something went wrong,Try again later')
            //console.log(result);
          }
        }
       


      }
      else{
        toast.error(`session Timed Out,please login`)
      }
    }
  }
  console.log(profileDetails);
  return (
    <>
      {/* modal */}
      <Modal show={show} onHide={handleClose}  backdrop="static" className='edit-modal'>
        <div closeButton className='modalheader'>
          <h3>{existinguser.username}</h3>
          <h4>Edit Profile</h4>
        </div>
        <Modal.Body className='modalbody'>


          <div className='profileimg'>
            <label class="profile-file-upload">
              <div class="profileaddimage">
                <img
                  src={profilepreview ? profilepreview :`existingimage`}
                  alt=""
                  style={{ width: profilepreview ? '100%' : "" }} />
                <input id="file"
                  type="file"
                  onChange={(e) => setProfileDetails({ ...profileDetails, profile_picture: e.target.files[0] })} />
              </div>
            </label>

          </div>


          <div className='mt-5'>
            <h4>{existinguser.username}</h4>
            <input type="input"
              class="form__field"
              required=""
              placeholder='First Name'
              onChange={(e) => setProfileDetails({ ...profileDetails, first_name: e.target.value })}
              value={profileDetails.first_name} />

            <input type="input"
              class="form__field"
              required=""
              placeholder='Last Name'
              onChange={(e) => setProfileDetails({ ...profileDetails, last_name: e.target.value })}
              value={profileDetails.last_name} />

            <input type="input"
              class="form__field"
              required=""
              placeholder='Bio'
              onChange={(e) => setProfileDetails({ ...profileDetails, bio: e.target.value })}
              value={profileDetails.bio} />
          </div>
        
        </Modal.Body>
        <Modal.Footer className='modalfooter' style={{ backgroundColor: 'black' }}>
          <Link to={'/dashboard'} >
            <button className='closbtn'> Close</button>
          </Link>
          <button className='updatbtn' onClick={handleUpdateprofile}>
            Update
          </button>
        </Modal.Footer>
        {loader &&   <div class="loader"
        style={{
          margin:'-300px 0px 0px 220px'
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

export default Profile