import React from 'react'
import { Link } from 'react-router-dom';
import { BlogData } from '../../Data/descriptionData';

const NewsCard = () => {

  return (
    <div>
      {BlogData.map((item) =>
        <div key={item.id} className='w-[25%] h-[500px] rounded-lg bg-white inline-block m-5 group hover:shadow-md  transition-transform'>
          <div className='bg-town bg-cover h-3/5 rounded-t-lg group-hover:opacity-70 '>

          </div>
          <div className='flex flex-col tracking-tight  text-justify  h-2/5'>
            <span className='text-center pt-2'>
              {item.title}
            </span>
            <span className='overflow-hidden text-ellipsis line-clamp-4 px-4 pt-2'>
              {item.description}
            </span>
            <button className='w-[100px] h-[40px] m-4 bg-blue-300 rounded-lg border-slate-900 '><Link to={`/${item.id}`}> Daha Fazla</Link></button>
          </div>
        </div>

      )}
    </div>
  )
}

export default NewsCard