import {GETUPLOADS_ENDPOINT} from '../../endpoints/index'

export const getUploads = (email)=>{
    try{
        return axios.post(GETUPLOADS_ENDPOINT+`?email=${email}`);
    }catch(err){
        return err;
    }
}