import React, { useEffect } from 'react'
import { useBlogPost } from '../../Context/blogPost';
import {  useParams } from 'react-router-dom';
import { BlogData } from '../../Data/descriptionData';
const BlogNews = () => {

    const {setHandleBlogPostID}=useBlogPost();
    let { newsid } = useParams(); 

    console.log(newsid)

    useEffect(() => {
      setHandleBlogPostID(newsid);
    }, [setHandleBlogPostID, newsid]);

    return (
        <div>
            {BlogData.map((item)=> item.id===newsid ? 
        <div className='container mx-auto relative top-[100px] bg-white '>
            <div className='bg-town bg-cover h-[400px] rounded-t-lg group-hover:opacity-70 '>

            </div>
            <span className='text-center block pt-5 text-[30px]'>
                {item.title}
            </span>
            <div className='text-justify p-5'>
                {item.description}
                </div>
        </div>
        :null)}
        </div>
    )
}

export default BlogNews