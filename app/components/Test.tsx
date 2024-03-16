import Link from 'next/link'
import React from 'react'

const Test = () => {
  return (
    <div className='container'>
      <Link href={'/'}>
        <h1 className='text-red-500'>Test</h1>
      </Link>
    </div>
  )
}

export default Test
