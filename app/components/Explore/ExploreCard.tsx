import React from 'react'
import { ExploreItem } from '../../types/app'
import Image from 'next/image';

type ExploreCardProps = ExploreItem;
const ExploreCard = ({ location, img, distance }: ExploreCardProps) => {
    return (
        <div className='flex items-center mt-5 m-2 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out'>
            <div className='relative w-16 h-16 '>
                <Image src={img} alt='Explore Image' fill></Image>
            </div>
            <div >
                <h2>{location}</h2>
                <p className='text-gray-500'>{distance}</p>
            </div>
        </div>
    )
}

export default ExploreCard
