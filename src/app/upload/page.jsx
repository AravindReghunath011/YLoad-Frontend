"use client";
import React,{useEffect, useContext, useState} from 'react'
import DataTable from '../../components/DataTable';
import EmptyCard from '../../components/EmptyCard'
import CardList from '../../components/Card';
import {getUploads} from '../../../axios/GET/index';
import { UserContext } from '../../../context/userContext';
import Navbar from '@/components/Navbar';

const page = () => {
  const [list, setList] = useState([]);
  const { user, setUser } = useContext(UserContext);
  useEffect(()=>{
    async function fetchUploads(){
      try{
        let r = await getUploads(user?.email);
        setList(r.data.uploads)
      }catch(err){
        console.log(err);
      }
    }
    fetchUploads()
  },[])
  return (
    <>
    <Navbar/>
    <div className='w-[90%] m-auto mt-14 flex flex-col md:flex-row gap-6 items-center md:items-start'>
        <EmptyCard/>
        {/* <CardList/>
        <CardList/>
        <CardList/> */}
        <DataTable data={list}/>
    </div>
    </>
  )
}

export default page