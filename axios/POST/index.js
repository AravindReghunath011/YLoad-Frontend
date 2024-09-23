import axios from "axios";
import {LOGIN_ENDPOINT, SIGNUP_ENDPOINT} from '../../endpoints/index'

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