import React, { useState } from 'react'
import { useUser } from '../../Context/user'

const Login = () => {

    const {handleLogin} = useUser();
    const [userID, setUserID] = useState();
    const [password,setPassword]= useState();

    const loginFunc = event =>{
        event.preventDefault();
        handleLogin({userID:userID,password:password})
    }

    return (
        <div className='container mx-auto relative top-[100px] bg-white  '>
            <form onSubmit={loginFunc} action="" className='p-5'>
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">User ID</label>
                <input onInput={e=> setUserID(e.target.value)} type="text" name="" id=""
                    className='block p-2.5 mb-2 w-[25%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ' />
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">User ID</label>
                <input onInput={e=>setPassword(e.target.value)} type="password" name="" id=""
                    className='block p-2.5 mb-2 w-[25%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ' />                
                <input className='w-[100px] h-[40px] cursor-pointer bg-blue-300 rounded-lg border-slate-900 ' type="submit" value="Login" name="" id="" />
            </form>
        </div>
    )
}

export default Login