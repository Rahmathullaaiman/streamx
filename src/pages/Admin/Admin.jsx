import React, { useEffect, useState } from 'react'
import '../User/dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import addimage from '../../Assest/add-image.png'
import { addStreamAPI } from '../../services/allapi'

function Admin() {
    const[preview,setpreview]=useState("")
    const [token, setToken] = useState("")
  
  

    const[streamDetails,setStreamDSetails]=useState({
        title:"",
        description:"",
        tumbnile:"",
        url:'',
        category:''
    })
    console.log(streamDetails);
    // category
    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        setStreamDSetails((prevStreamDetails) => ({
          ...prevStreamDetails,
          category: selectedValue
        }));
      };
    //   url split
    const embedVideoLink = (e)=>{
        const {value} = e.target
        console.log(value.slice(-11));
        const link = `https://www.youtube.com/embed/${value.slice(-11)}`
        setStreamDSetails({...streamDetails,url:link})
      }
    useEffect(() => {
        if (streamDetails.tumbnile) {
          setpreview(URL.createObjectURL(streamDetails.tumbnile))
        }
      }, [streamDetails.tumbnile])

      useEffect(()=>{
        if(sessionStorage.getItem('existinguser')){
          const existinguser = (JSON.parse(sessionStorage.getItem('existinguser')))
         // console.log(existinguser);
          setToken(existinguser.access)
        }
      },[])
    //console.log(token);


    const handleADDstream = async () => {
        const { title, description, category, tumbnile, url } = streamDetails;
        if (!title || !description || !category || !tumbnile) {
          alert('something is missing');
        } else {
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
                alert('stream added successfully');
                setStreamDSetails({
                    title:"",
                    description:"",
                    tumbnile:"",
                    url:'',
                    category:''
                   })
                   setpreview("")
               // console.log(result);
              }
               else {
                alert('Something went wrong, try again later');
                setStreamDSetails({
                    title:"",
                    description:"",
                    tumbnile:"",
                    url:'',
                    category:''
                   })
                   setpreview("")
                //console.log(result);
              }
           
            
          }
        }
      };
      
  return (
    <>

    <div className='userpage'>
        <div className='dashboard'>
            <div className='dashtitle hr'>
                <h3>ADMIN DASHBOARD</h3>
                <hr />
            </div>
            <div className='livestream'>
                <div className='livestreamtitle'>
                    <h3>Fill up the Details</h3>
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
<div class="form__group field">
    <input type="input" class="form__field" placeholder="URL" required="" onChange={embedVideoLink} value={streamDetails.url}/>
    <label for="name" class="form__label">URL</label>
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


  <label for="file" class="custum-file-upload">
<div class="addimage">
<img src={preview?preview:addimage} alt="" style={{width:preview?'100%':""}}/>
</div>
   <input id="file" type="file" onChange={(e)=>setStreamDSetails({...streamDetails,tumbnile:e.target.files[0]})} />
</label>

  
</form>
<button className="startbtn" onClick={handleADDstream}>
              Add stream
              </button>
                </div>
            </div>
        </div>

       
    </div>
    </>
  )
}

export default Admin