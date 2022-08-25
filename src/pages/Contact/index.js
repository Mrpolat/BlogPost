import React from 'react'

const Contact = () => {
    return (
        <div className='container mx-auto relative top-[100px] bg-white '>
            <div className='text-justify p-5'>                
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your email</label>
                <input type="email" className='block p-2.5 mb-2 w-[25%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ' />
                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="4" className="block p-2.5 mb-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your message..."></textarea>
                <button className='w-[100px] h-[40px] bg-blue-300 rounded-lg border-slate-900 '>Gönder</button>
            </div>
        </div>
    )
}

export default Contact