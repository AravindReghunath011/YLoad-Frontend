"use client"
console.log(process.env.NEXT_PUBLIC_ENVIRONMENT)
const BASE_URL = process.env.NEXT_PUBLIC_ENVIRONMENT == "dev" ? "http://localhost:8000" : "https://y-load-backend.vercel.app";
// const BASE_URL = "http://localhost:8000";
console.log("Base url ==>" , BASE_URL);
export const SIGNUP_ENDPOINT = `${BASE_URL}/api/user/register`;
export const LOGIN_ENDPOINT = `${BASE_URL}/api/user/login`;
export const GETUPLOADS_ENDPOINT = `${BASE_URL}/api/user/getuploads`;
export const GET_PRESINED_URL_ENDPOINT = `${BASE_URL}/api/v1/presignedurl`;
export const GENERATE_AUTH_URL_ENDPOINT = `${BASE_URL}/api/v1/generateAuthUrl`;