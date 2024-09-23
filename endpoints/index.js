import * as dotenv from 'dotenv'

const BASE_URL = process.env.ENVIRONMENT == "dev" ? "http://localhost:8000" : "https://y-load-backend.vercel.app";
console.log("Base url ==>" , BASE_URL);
export const SIGNUP_ENDPOINT = `${BASE_URL}/api/user/register`
export const LOGIN_ENDPOINT = `${BASE_URL}/api/user/login`
export const GETUPLOADS_ENDPOINT = `${BASE_URL}/api/user/getuploads`