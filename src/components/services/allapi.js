import { base_Url } from "./baseurl"
import { commonAPI } from "./commonapi"

//login api
export const loginapi = async(user)=>{
    return await commonAPI('POST',`${base_Url}/login/`,user,"")
}
