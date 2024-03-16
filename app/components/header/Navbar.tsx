import React from 'react'
import { GlobeAltIcon , Bars3Icon  , UserIcon   } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a Host</p>
        <GlobeAltIcon className='h-6 cursor-pointer '></GlobeAltIcon>
        <div className='flex space-x-2 border-2 p-2 rounded-full '>
            <Bars3Icon className='h-6'></Bars3Icon>
            <UserIcon className='h-6'></UserIcon>

        </div>
    </div>
  )
}

export default Navbar
