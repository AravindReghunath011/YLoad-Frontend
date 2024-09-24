"use client"
import Link from "next/link";
import { useState } from "react";
import { SignUpFn } from '../../../axios/POST';
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Signup() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    async function handleSignUp() {
        setIsLoading(true)
        try {
            let r = await SignUpFn({
                name,
                email,
                password
            });
            if (r.status == 200) {
                router.push('/')
            }
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }

    return (
        <div className="flex h-screen max-h-screen items-center p-10 overflow-hidden">
            <div className="flex flex-col justify-center md:w-1/2 md:ms-32">
                <h1 className="flex-start font-bold md:text-3xl text-2xl">
                    <span className="font-extrabold text-5xl">J</span>
                    oin with us
                </h1>
                <p className="text-xs text-gray-500">Increase your collaboration and engagement</p>

                <label htmlFor="name" className="mt-4 text-sm font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1 text-[#121212]"
                />

                <label htmlFor="email" className="mt-4 text-sm font-semibold">Email</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1 text-[#121212]"
                />

                <label htmlFor="password" className="mt-4 text-sm font-semibold">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1 text-[#121212]"
                />
                {
                    isLoading ? (
                        <Button disabled className="border mt-4 w-72 py-1 bg-green-800 text-white rounded-lg">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>) : (
                        <button
                            className="border mt-4 w-72 py-1 bg-green-800 text-white rounded-lg"
                            onClick={handleSignUp}
                        >
                            Create
                        </button>
                    )
                }

                <Link
                    href={'/login'}
                    className="text-xs text-gray-500 mt-2 md:ms-20 ms-14 w-full"
                >
                    Already have an account?
                </Link>
            </div>
            <div className="w-1/2 hidden h-screen py-10 lg:block">
                <img src="/img-01.jpg" alt="image" className="object-cover h-full w-full rounded-2xl" />
            </div>
        </div>
    );
}
