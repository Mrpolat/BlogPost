import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const HeaderItem = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome className='h-[37px] w-[20px]' />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillQuestionCircle className='h-[37px] w-[20px]' />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/about',
    icon: <AiIcons.AiFillContacts className='h-[37px] w-[20px]' />,
    cName: 'nav-text'
  },
  {
    title: 'Write',
    path: '/about',
    icon: <IoIcons.IoIosPaper className='h-[37px] w-[20px]' />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/about',
    icon: <MdIcons.MdLogin  className='h-[37px] w-[20px]'/>,
    cName: 'nav-text'
  }
];