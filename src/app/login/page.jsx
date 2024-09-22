"use client"
import Link from "next/link";
import { useState } from "react";

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return (
        <div className="flex max-h-screen p-10">
            <div className="flex flex-col justify-center w-1/2 md:ms-32">
                <h1 className="flex-start font-bold md:text-3xl text-2xl">
                    <span className="font-extrabold text-5xl">W</span>
                   elcome back</h1>
                <p className="text-xs text-gray-500">Increase your collabration and engagment</p>
                <label htmlFor="email" className="mt-4 text-sm font-semibold">Email</label>
                <input 
                type="text" 
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72" />

                <label htmlFor="Description" className="mt-4 text-sm font-semibold">Password</label>
                <input 
                type="password" 
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72" />

                <button className="border mt-4 w-72 py-1 bg-green-800 text-white rounded-lg">Login</button>
                <Link 
                href={'/signup'}
                className="text-xs text-gray-500 mt-2 md:ms-20 ms-14 w-full"
                >New to our platform?</Link>

            </div>
            <div className="w-1/2 hidden lg:block">
                <img src="/img-01.jpg" alt="image" className="object-cover h-full w-full rounded-2xl" />
            </div>
        </div>
    )
}