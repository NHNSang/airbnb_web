import React from 'react'
import ExploreCard from './ExploreCard'
import { getExplore } from '../../utils/api'
import { ExploreData } from '../../types/app';
import MainHeader from '../MainHeader';

const Explore = async () => {
    const exploreData: ExploreData = await getExplore();
    // console.log(exploreData)
  return (
    <section className='pt-6'>
        <div className='container'>
            <MainHeader title='Explore near here'></MainHeader>
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData.map((item) => (
                <ExploreCard key={item.location} img={item.img} location={item.location} distance={item.distance}></ExploreCard>
            ))}
            </div>
        </div>
    </section>
  )
}

export default Explore
