import { apiNoAuth } from "./client.js"

const endpoint_user = '/user'

export const registerUser = async (userData, cancelToken) =>{
    let error;
    const response = await apiNoAuth(cancelToken).post(endpoint_user, userData)
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    }
    return {
        error
    }
}