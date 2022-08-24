import React from 'react'
import { HeaderItem } from './HeaderItem';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='bg-opacity absolute w-[100%] block'>
            <div className=''>
                <ul className='flex justify-center py-6 space-x-10' >
                    {HeaderItem.map((item, index) => {
                        return (
                            <li key={index} className={""}>
                                <Link to={item.path} className={"flex text-white text-[25px]"}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Header