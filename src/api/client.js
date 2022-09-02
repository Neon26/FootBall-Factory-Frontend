import base64 from "base-64"
import {create} from 'apisauce'

const base = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost' ?
"http://127.0.0.1:5000" : ''

export const apiNoAuth = (cancelToken) => create({
    baseURL: base,
    cancelToken
})

export const apiBasicAuth = (email, password, cancelToken) => create({
    baseURL: base,
    cancelToken,
    headers:{
        Authorization: 'Basic ' + base64.encode(email+":"+password)
    }
})

export const apiTokenAuth = (token, cancelToken) => create({
    baseURL: base,
    cancelToken,
    headers:{
        Authorization: 'Bearer ' + token
    }
})



