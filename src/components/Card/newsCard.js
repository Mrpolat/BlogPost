import React from 'react'

const newsCard = () => {
  return (
    <div className='w-[25%] h-[500px] rounded-lg bg-white inline-block m-5 group hover:shadow-md  transition-transform'>
        <div className='bg-town bg-cover h-3/5 rounded-t-lg group-hover:opacity-70 '>

        </div>
        <div className='flex flex-col tracking-tight  text-justify  h-2/5'>
            <span className='text-center pt-2'>
                Lorem ipsum dolor sit amet.
            </span>
            <span className='overflow-hidden text-ellipsis line-clamp-4 px-4 pt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, quod? Nisi, porro modi? Provident rerum dolores ex nam nihil repellat, cum, aut voluptatibus incidunt commodi eum consequatur quia, ipsam unde doloremque. Dicta, voluptates. Blanditiis cupiditate labore repudiandae mollitia optio officia beatae natus consequatur error similique iste harum, ratione dicta dolores possimus, quas voluptas nesciunt hic veniam itaque ullam! Reprehenderit illum tenetur eveniet officia fugiat dolorum blanditiis aliquid amet? Dignissimos, quidem deleniti voluptate magnam illo mollitia non magni? Error ducimus iusto, tempora harum consectetur explicabo ex, natus est at, hic itaque laboriosam magnam labore ullam ad repudiandae! Illum, ut! Natus, deleniti!
            </span>
            <button className='w-[100px] h-[40px] m-4 bg-blue-300 rounded-lg border-slate-900 '>Daha Fazla</button>
        </div>
       
    </div>
  )
}

export default newsCard