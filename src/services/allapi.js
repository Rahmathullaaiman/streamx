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

