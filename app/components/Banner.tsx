import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
      <Image src="https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80" alt="banner-img" fill className="object-cover object-left"  objectPosition="center"></Image>
      <div className='absolute text-center w-full top-1/2 z-10'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect</p>
        <button className='text-purple-500 bg-white px-10 py-4 shawdow-md rounded-full font-bold my-3' type='button'>
            I am feeling
        </button>
      </div>
    </div>
  )
}

export default Banner
