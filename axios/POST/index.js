import axios from "axios";
import {
    GENERATE_AUTH_URL_ENDPOINT,
    GET_PRESINED_URL_ENDPOINT, 
    LOGIN_ENDPOINT, 
    SIGNUP_ENDPOINT

} from '../../endpoints/index'

export const SignUpFn = async(data)=>{
    try{
        return axios.post(SIGNUP_ENDPOINT , data)
    }catch(err){
        return err;
    }
}

export const LoginFn = async(data)=>{
    try{
        return axios.post(LOGIN_ENDPOINT , data);
    }catch(err){
        return err;
    }
}
export const GetPresignedUrlFn = (data) =>{
    try{
        return axios.post(GET_PRESINED_URL_ENDPOINT , data);
    }catch(err){
        return err;
    }
}

export const GenerateAuthUrlFn = (data)=>{
    try{
        return axios.post(GENERATE_AUTH_URL_ENDPOINT , data);
    }catch(err){
        return err;
    }
}