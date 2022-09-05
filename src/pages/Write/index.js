import React, { useRef, useState } from 'react'
import { useBlogPost } from '../../Context/blogPost';

const Write = () => {
    const [blogTitle, setBlogTitle] = useState("")
    const [blogContent, setBlogContent] = useState("")
    const { handleBlog } = useBlogPost();
    
    const fileInput = useRef();
    const selectFile = () => {
        fileInput.current.click();
    }
    const pushBlog = () => {
        handleBlog({ title: blogTitle, content: blogContent, uploadFile:fileInput })
        console.log(fileInput.current.value)
    }
    return (
        <div className='container mx-auto relative top-[100px] bg-white '>
            <div className='text-justify p-5'>
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Title</label>
                <input onInput={e => setBlogTitle(e.target.value)} type="text" className='block p-2.5 mb-2 w-[25%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ' />
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Description</label>
                <textarea onInput={e => setBlogContent(e.target.value)} id="message" rows="4" className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your message..."></textarea>
                <input type="file" style={{ "display": "none" }} ref={fileInput} />
                <button onClick={selectFile} className='w-[100px] h-[40px] bg-blue-300 rounded-lg border-slate-900' >
                    <span className='ms-2' >Dosya Seç</span>
                </button>                
                <br />                
                <br />
                <button className='w-[100px] h-[40px] bg-blue-300 rounded-lg border-slate-900 ' onClick={pushBlog}>Gönder</button>
            </div>
        </div>
    )
}

export default Write