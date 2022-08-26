import React from 'react'
import Card from '../Card/index'
import NewsCard from '../Card/newsCard'
const MainSection=()=> {
  return (
    <div className='w-[100%] flex flex-row '>
        <div className='basis-4/5'>
        <NewsCard/>
        </div>
        <div className='basis-1/5'>
        <Card/>
        </div>
    </div>
  )
}

export default MainSection