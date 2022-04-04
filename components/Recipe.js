/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'

function Recipe({ img, name, id, onOpen }) {
  return (
    <div className='flex flex-col w-3/4 bg-red-400 shadow-xl p-1 rounded-xl overflow-hidden font-nunito relative'>

      <img 
        className='rounded-xl w-full h-full object-cover'      
        src={img} alt="" />
      <div className='mt-3 rounded-lg'>
        <h1 className='font-bold text-lg sm:text-md p-2 text-white truncate w-10/12'>
          {name}
        </h1>
      </div>

      <ArrowCircleRightIcon
          className='mt-4 text-red-100 font-bold cursor-pointer hover:text-red-300 absolute right-3 bottom-2 w-8'
          onClick={() => onOpen(id)}
      />
    </div>
  )
}

export default Recipe