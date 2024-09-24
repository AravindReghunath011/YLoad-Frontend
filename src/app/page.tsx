import React from 'react'
import { Button } from "@/components/ui/button"
import Marquee from 'react-fast-marquee'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'


const page = () => {
  
  return ( 
    <>

<Navbar />
    <div className='h-full w-full'>
      
      
        <div className='h-screen w-full  text-center flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-5xl xl:text-7xl'
            >Allow Anyone, Anywhere <br /> to Upload <br />
                <span className='text-green-400'>—With Your Approval.</span>
            </h1>
            <p className='text-xs md:text-lg w-[85%] xl:text-lg mt-8'>
            Our platform enables seamless video uploads <br className='md:hidden' /> to YouTube  from anywhere. <br className='hidden md:inline-block' />
Editors can collaborate effortlessly, while  you maintain control through <br className='hidden md:block lg:hidden' /> secure OAuth. <br className='hidden xl:inline-block' />
No credentials required—just approval for a hassle-free experience!</p>
            <div className='flex gap-5 mt-24 xl:mt-10'>
              <Link href={'/upload'}>
              <Button  className={'bg-[#121212] text-white p-2 md:p-5 hover:bg-[#121212] hover:border-neutral-700 border px-4 md:w-36 shadow'}>Dashboard</Button>
            </Link>
            <Link href={'/uploadnew'}> <Button className={'bg-green-800 border border-green-700 hover:bg-green-800  hover:border-green-600 p-2 px-4 md:p-5 md:w-36 text-white'}>Upload a video</Button></Link>

            </div>
            <div className='w-[70%] md:w-50% mt-16 text-xl'>

            <Marquee gradient={true} gradientColor='#121212' gradientWidth={300} >
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
              <Image src={"/Logo.png"} width={30} height={10} alt='EC'/> &nbsp; EC Upload &nbsp;
            </Marquee>
            </div> 
        </div>
        
    </div>
    </>
  )
}

export default page