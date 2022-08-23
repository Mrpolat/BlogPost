import React from 'react'
import { HeaderItem } from './HeaderItem';

const Header = () => {
    return (
        <div className='bg-blue-500 '>
            <div className=''>
                <ul className='flex justify-center py-6 space-x-10' >
                    {HeaderItem.map((item, index) => {
                        return (
                            <li key={index} className={""}>
                                <div to={item.path} className={"flex text-white text-[25px]"}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header