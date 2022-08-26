import React, { useRef } from 'react'

const Write = () => {

    const fileInput = useRef();
    // const selectFile = () => {
    //     fileInput.current.click();
    // }

    return (
        <div className='container mx-auto relative top-[100px] bg-white '>
            <div className='text-justify p-5'>
                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Title</label>
                <input type="text" className='block p-2.5 mb-2 w-[25%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ' />
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Blog Description</label>
                <textarea id="message" rows="4" className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your message..."></textarea>
                <div className='my-5' >
                    <label Htmlfor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Upload File</label>
                    <input ref={fileInput} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer " id="file_input" type="file" name='file'/>
                </div>
                <button className='w-[100px] h-[40px] bg-blue-300 rounded-lg border-slate-900 '>Gönder</button>
            </div>
        </div>
    )
}

export default Write