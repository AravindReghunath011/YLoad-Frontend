import React from 'react'

import EmptyCard from '../../components/EmptyCard'
import CardList from '../../components/Card';

const page = () => {
  return (
    <div className='w-[90%] m-auto mt-14 flex gap-6'>
        <EmptyCard/>
        <CardList/>
        <CardList/>
        <CardList/>
    </div>
  )
}

export default page