"use client"

import React, { useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { DateRangePicker, RangeKeyDict } from 'react-date-range'; 
//lưu ý import 2 file npm i react-date-range &  npm i @types/react-date-range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { UsersIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';


const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const [input , setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGest, setNumberOfGest] = useState(1);
  const handleSelect = (ranges: RangeKeyDict)=>{
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  }
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  return (
    <>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input type='text' placeholder={placeholder || "Start your search?"} className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-non' value={input} onChange={(e) => setInput(e.target.value)}></input>
        <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'></MagnifyingGlassIcon>
      </div>
      {input && (
        <div className='absolute top-[100%] left-[50%] translate-x-[-50%] bg-white  '>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={['#FD5B61']}
            minDate={new Date()} />
            <div className='flex items-center border-b mb-4'>
              <h2 className='text-2xl flex-grow font-semibold'>Number of Guest</h2>
              <UsersIcon className='h-5'></UsersIcon>
              <input 
              type='number' 
              className='w-12 pl-2 text-lg outline-none text-red-400' 
              value={numberOfGest}
              min={1}
              onChange={(e) => setNumberOfGest(Number(e.target.value))}
              ></input>
            </div>
            <div className='grid grid-cols-2 text-center '>
              <button typeof='button' onClick={() => setInput("")}>Cancel</button>
              <Link 
              href={{
                pathname: "/search",
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numberOfGest=${numberOfGest}`,
              }}
              onClick={() => setInput("")}
              >Search</Link>
            </div>
        </div>  
      )}
    </>
  )
}

export default SearchBar
