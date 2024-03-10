import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
import { getallUsersAPI, searchallAPI } from '../../services/allapi';
import { BASE_URL } from '../../services/baseurl';


function Navbar() {

const [existinguser,setexistinguser] = useState([])
const [isactiveUser,setIsactiveUser] = useState(false)
const [searchresult,setSearchResult] = useState([])
const[searchitem,setSearchitem] = useState("")
const [currentUser,setCurrentUser] = useState([])
const [allusers, setallusers] = useState([])
const [isInputFocused, setIsInputFocused] = useState(false);
const handleInputFocus = () => {
  setIsInputFocused(true);
};

const handleInputBlur = () => {
  setIsInputFocused(false);
 setTimeout(() => {
  setSearchitem("");
 }, 200);
};


useEffect(()=>{
  if(sessionStorage.getItem('existinguser')){
    setexistinguser(JSON.parse(sessionStorage.getItem('existinguser')))
    setIsactiveUser(true)
  }
},[])

const getusers = async () => {
const result = await getallUsersAPI()
setallusers(result.data)
}

const searchid = existinguser.id
const searchkey = 'id'
useEffect(() => {
const fetchData = async () => {
  await getusers(); // Fetch all users
  const igotuser = allusers.find((user) => user.id === searchid);
  if (igotuser) {
    setCurrentUser(igotuser);
  }
};

fetchData();
  }, [searchid, allusers]);



    const handlesearch = async()=>{
        const result = await searchallAPI(searchitem)
     if(result.status==200){
      setSearchResult(result.data)
      console.log(result.data);
     }
   
      }
// useEffect(()=>{
// handlesearch()
// },[searchitem])
//console.log(searchresult);

  return (
<>
  
      <nav className="navbar" style={{ position: 'fixed', width: '100%', zIndex: '100',backgroundColor:'#00050',
    display:isInputFocused?'flex':'',justifyContent:isInputFocused?'center':"",
    }}>
     {!isInputFocused &&   <div className="navbar-links-left d-flex ms-2">
        <div>  <Link to="/" className="navbar-link"><i className="fa-brands fa-twitch fa-2xl "></i></Link>
        <h6 style={{color:'white'}}>HYPE</h6>
        </div>
         
        <div className='mt-1'>  <Link to="/browse" className="navbar-link fw-bolder ms-5 fs-5">Browse</Link></div>
        </div>}
        <div className="navbar-center mb-3">
          <div className="navbar-search">
            <input type="text" 
            placeholder="Search" 
            className="navbar-search-input"
           onChange={(e) => setSearchitem(e.target.value)}
           value={searchitem}
           onFocus={handleInputFocus}
           onBlur={handleInputBlur}
            />
   <button className="searchbtn" onClick={handlesearch}>
   <i class="fa-solid fa-magnifying-glass"></i>
                </button>
          </div>
        </div>
       {isInputFocused ?
       <button className="xbtn">x</button>
       
       :<div className="navbar-profile">
       
          <div className="navbar-profile-image">
         {isactiveUser  ?
         <Link to="/dashboard" className="navbar-link fw-bolder">
         <img src={currentUser?`${BASE_URL}/${currentUser.profile_picture}`:"https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"}  
         alt=""
          className="navbar-profile-image" 
          style={{height:'50px',width:'50px'}}
          />
         </Link>
         :
         <Link to={'/authentication'}><button className="btn me-2">sign in</button></Link>
        //  :<Link to="/authentication" className="navbar-link fw-bolder">
        //   <img src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079" alt="User Profile" className="navbar-profile-image" />
        //   </Link>
          }
           
          </div>
        </div>}

      </nav>

      {isInputFocused && (
        <div className="resultdiv">
        <div className='resultdiv2'>
        <div className="sidebar-content">
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>

            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>

            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>

            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
            <div className={`user-info`}>
                <img
                  src="https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.2.1195849224.1690294079"
                  alt="User"
                  className="user-image"
                  style={{height:'80px',width:'80px'}}
                />
           <div className="user-details">
                  <p style={{ fontSize: "40px",margin:'20px' }} className="user-name fw-bolder">Abhijith</p>
                
                </div>
              
            </div>
             
          </div>
        </div>
        </div>
      )}
</>
  );
}

export default Navbar;
