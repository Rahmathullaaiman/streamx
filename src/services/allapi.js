import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"



// register api
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/register/`,user,"")
}   
// login api
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/login/`,user,"")
}
// get all users
export const getallUsersAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/all-users/`,{})
}
//get categories
export const getCategoryAPI = async(id)=>{
    return await commonAPI("GET",`${BASE_URL}/Filterby/category/${id}/`,id)
}

//add stream
export const addStreamAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/StreamCreateView/`,reqBody,reqHeader)
}

//like & unlike  stream
export const likeStreamAPI = async(stream_id,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/CreateLike/${stream_id}/`,"",reqHeader)
}

//FOLLOW
export const followUserAPI = async(userid,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/CreateFollower/${userid}/`,"",reqHeader)
}
//update profile
export const updateProfileAPI = async(userid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/update-profile/${userid}/`,reqBody,reqHeader)
}
//search user
export const searchallAPI = async(searchitem)=>{
    return await commonAPI("GET",`${BASE_URL}/search/?q=${searchitem}`,"","")
}

//subscribe user
export const subscribeAPI = async(userid,reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/subcribe/${userid}/`,reqBody,reqHeader)
}
