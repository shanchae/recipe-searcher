/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'
import logo from '../assets/sauteed.png'
import { SearchIcon } from "@heroicons/react/solid"
import Link from 'next/link'

function Header({ onSearchChange }) {
  return (
    <div className='flex justify-between p-5 items-center space-x-4'
    >
      <div className='hidden md:flex justify-between items-center w-56'>
        <Link href={'/'}>
          <div className='flex items-center cursor-pointer'>
            <div className='w-12 h-12'>
              <Image
                  src={logo}
                  objectFit='contain'
              />
            </div>
            <div className='font-nunito font-bold text-2xl ml-4'>
                Recipe Snips
            </div>
          </div>
          </Link>
      </div>
      <div className='flex flex-1 justify-between bg-white border-slate-300  py-2 px-2 items-center shadow-lg'>
          <input 
            className='outline-none bg-transparent ml-4'
            type="text" 
            placeholder='Search...'
            onChange={onSearchChange}  
          />
          <SearchIcon
            className='h-8 w-8 p-1 bg-red-300 rounded-full'
          />
      </div>
    </div>
  )
}

export default Header