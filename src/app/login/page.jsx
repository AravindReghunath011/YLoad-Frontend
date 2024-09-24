"use client"
import Link from "next/link";
import { useContext, useState } from "react";
import { LoginFn } from "../../../axios/POST";
import { useRouter } from "next/navigation";
import { UserContext } from "../../../context/userContext";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const { user, setUser } = useContext(UserContext);
    async function handleLogin(){
        setIsLoading(true);
        try{
            let r = await LoginFn({
                email,
                password
            })
            setUser({
                name:r.data.user.name,
                email:r.data.user.email
            })
            if(r.status == 200){
                router.push('/');
            }
            console.log(r)
            setIsLoading(false);
        }catch(err){
            console.log(err);
            setIsLoading(false)
        }
    }

    return (
        <div className="flex h-screen max-h-screen items-center p-10 overflow-hidden">
            <div className="flex flex-col justify-center md:w-1/2 md:ms-32">
                <h1 className="flex-start font-bold md:text-3xl text-2xl">
                    <span className="font-boold text-4xl">W</span>
                   elcome back</h1>
                <p className="text-xs text-gray-500">Increase your collabration and engagment</p>
                <label htmlFor="email" className="mt-8 text-sm font-semibold">Email</label>
                <input 
                type="text" 
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1" />

                <label htmlFor="Description" className="mt-4 text-sm font-semibold">Password</label>
                <input 
                type="password" 
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1" />
                {
                    isLoading ? (
                        <Button disabled className="border mt-4 w-72 py-1 bg-green-800 text-white rounded-lg">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                    </Button>
                    ) : (
                        <button className="border mt-4 w-72 py-1 bg-green-800 text-white rounded-lg" onClick={handleLogin}>Login</button>
                    )
                }
                <Link 
                href={'/signup'}
                className="text-xs text-gray-500 mt-2 md:ms-20 ms-14 w-full"
                >New to our platform?</Link>

            </div>
            <div className="w-1/2 hidden h-screen py-10 lg:block">
                <img src="/img-01.jpg" alt="image" className="object-cover h-full w-full rounded-2xl" />
            </div>
        </div>
    )
}