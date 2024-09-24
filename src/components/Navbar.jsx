"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { FaGithub } from 'react-icons/fa';
import { UserContext } from '../../context/userContext';


const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className='w-full h-16   border-b '>
      <div className='w-[90%] m-auto   h-full flex justify-between '>

        <section className=' w-10  md:w-40  h-full text-2xl flex justify-center items-center'>
          <Link href={'/'}><Image src="/Logo.png" width={35} height={10}  alt='Logo'/></Link>
        </section>
        <section className=' w-40  h-full flex  justify-end md:justify-center items-center gap-5'>
          <Link href={'https://github.com/AravindReghunath011'} target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className='text-lightgray hover:text-white' />
          </Link>
          {
            user?.name ? (<Button className={'bg-[#121212] text-white   hover:bg-[#121212] hover:border-neutral-700 border shadow px-5'}>{user?.name}</Button>) : (
              <Link href={"/signup"}>
                <Button className={'bg-[#121212] text-white   hover:bg-[#121212] hover:border-neutral-700 border w-20 shadow'}>Sign up</Button>
              </Link>
            )
          }
        </section>
      </div>
    </div>
  )
}

export default Navbar 