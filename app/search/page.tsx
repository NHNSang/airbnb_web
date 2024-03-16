import React from 'react'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/Footer'
import { format } from 'date-fns'
import { getSearchResult } from '../utils/api'
import { searchResultData } from '../types/app'
import ListingCard from '@/app/components/ListingCard'
import Map from '@/app/components/Map'

type SearchParams = {
    location: string,
    startDate: string,
    endDate: string,
    numberOfGest: string,
}
const SearchResult = async ({ searchParams:{location, startDate, endDate, numberOfGest}}: {searchParams: any}) => {
    // console.log(SearchResult)
    let formatStartDate;
    let formatEndDate;
    if(startDate && endDate){
        formatStartDate = format(new Date(startDate), 'dd/MMMM/yyyy');
        formatEndDate = format(new Date(endDate), 'dd/MMMM/yyyy');
    }
    const range = `${formatStartDate} - ${formatEndDate}`;
    const filter = ["Cancellation Flexibility", "Type of Place", "Price", "Rooms and Beds", "More filters"];

    // bắt dữ liệu
    const searchResultData: searchResultData = await getSearchResult();
    console.log(searchResultData)
  return (
    <>
        <Header placeholder={`${location} | ${range} | ${numberOfGest} guests`}></Header>
        <main>
            <section className='pt-14'>
                <div className='container flex'>
                <div>
                <p className='text-xs'>
                    300+ Stays - {range} - for {numberOfGest} number of guests
                </p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>
                    Stay in {location}
                </h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 '>
                    {filter.map((filter)=>{
                        return <p key={filter} typeof='button' className='filter-btn'>{filter}</p>
                    })}
                </div>
                
                <div> 
                    {searchResultData.map((item)=>{
                        return <ListingCard key={item.title} {...item}></ListingCard>
                    })}
                </div>
                </div>
                <div className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResultData={searchResultData}></Map>
                </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>
  )
}

export default SearchResult
