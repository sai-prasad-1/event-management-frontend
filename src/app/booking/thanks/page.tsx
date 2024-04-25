import Link from 'next/link'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='font-bold text-3xl'>Thank You, You Booking has been confirmed</h1>
        <Link className='px-3 py-2 bg-blue-500 text-white rounded-xl mt-2' href={"/"}>Go to Home</Link>
    </div>
  )
}

export default Page