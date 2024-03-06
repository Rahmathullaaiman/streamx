import { commonAPI } from "../../services/commonAPI"
import { BASE_URL } from "./baseurl"

export const getvideoAPI = async(reqheader)=>{
    return await commonAPI("GET",`https://api.twitch.tv/helix/videos?id=987654321`,reqheader)
}


// register api
export const registerAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/register/`,user,"")
}   
// login api
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/login/`,user,"")
}
export const getGame = async(user)=>{
    return await commonAPI("GET",`${BASE_URL}/login/`,user,"")
}
export const getallUsersAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/all-users/`,{})
}