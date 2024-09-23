import {GETUPLOADS_ENDPOINT} from '../../endpoints/index'
import axios from 'axios';

export const getUploads = (email)=>{
    try{
        console.log(email);
        return axios.get(GETUPLOADS_ENDPOINT+`?email=${email}`);
    }catch(err){
        return err;
    }
}