import { LiveItem } from '@/app/types/app';
import Image from 'next/image';
import React from 'react'

type LiveCardProps = LiveItem;

export const LiveCard = ({img , title} : LiveCardProps)  => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src={img} alt='Live Image' fill ></Image>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}
