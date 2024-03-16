import React from 'react'
import { ListingCardItems } from '../types/app'
import Image from 'next/image'
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";

type ListingCardProps = Omit<ListingCardItems, 'long' | 'lat'>
const ListingCard = ({ img, location, title, description, star, price, total }: ListingCardProps) => {
    return (
        <div className='flex py-2 px-2 border-b cursor-pointer hover:opacity-80 pr-4 hover:shadow-sm transition duration-200 ease-out'>
            <div className='relative w-240 h-24 md:h-52 md:w-80 flex-shrink-0'>
                <Image src={img} alt='listing image' fill className='object-cover rounded-2xl'></Image>
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer'></HeartIcon>
                </div>
                <h4 className='text-xl'>{title}</h4>
                <p className='pt-2 text-sm text-gray-500 flex-grow '>{description}</p>
                <div className='flex justify-between items-end pt-5'>
                    <p className='flex items-center'>
                        <StarIcon className='h5 text-red-400'></StarIcon>
                        {star}
                    </p>
                    <div className=''>
                        <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                        <p className='text-right font-extralight'>{total}</p>
                    </div>
                </div>
                <div className='border-b w-10 pt-2'>
                </div>
            </div>
        </div>
    )
}

export default ListingCard
