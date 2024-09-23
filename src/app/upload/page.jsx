"use client";
import React,{useEffect, useContext, useState} from 'react'
import DataTable from '../../components/DataTable';
import EmptyCard from '../../components/EmptyCard'
import CardList from '../../components/Card';
import {getUploads} from '../../../axios/GET/index';
import { UserContext } from '../../../context/userContext';

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
    <div className='w-[90%] m-auto mt-14 flex gap-6'>
        <EmptyCard/>
        {/* <CardList/>
        <CardList/>
        <CardList/> */}
        <DataTable data={list}/>
    </div>
  )
}

export default page