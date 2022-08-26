import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import { ProfileCardData } from '../../Data/profileCardData';

const Card = () => {
    return (
        <div className='p-3 w-[300px] h-auto bg-darkgray relative float-right m-4 shadow-md'>
            <div className=''>
                <div className='bg-adem bg-cover bg-center rounded-lg h-[350px] m-1'>
                    {/* image */}
                </div>
                <div className='text-center uppercase'>
                    {ProfileCardData.name}
                </div>
                <div className=' border-slate-600 text-center py-1 '>
                    {ProfileCardData.description}
                </div>
                <div className='py-1 text-center uppercase border-y-2 border-slate-700'>
                    Programs
                </div>
                <ul className='flex flex-wrap text-[15px] py-1 '>
                    {ProfileCardData.programs.map((item) =>
                        <li className=' pl-5'>{item}</li>
                    )}
                </ul>
                <div className='py-1 text-center uppercase border-y-2 border-slate-700'>
                    Fallows
                </div>
                <ul className='flex flex-wrap justify-center pt-3'>
                    <a href="https://www.facebook.com/adem.dogan.779857">
                        <FaIcons.FaFacebookSquare className='text-3xl' />
                    </a>
                    <a href="https://www.instagram.com/adeemdgn/">
                        <FaIcons.FaInstagramSquare className='text-3xl' />
                    </a>
                    <a href="https://twitter.com/Polattucar">
                        <AiIcons.AiFillTwitterSquare className='text-3xl' />
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Card