/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'


function Feature({feature, onOpen}) {


  return (
    <div className='w-10/12 mx-auto bg-red-400 shadow-lg grid grid-cols-1 md:grid-cols-6 gap-2 p-2 rounded-2xl'>
            <img 
                className='md:col-span-2 rounded-2xl object-cover w-full h-full'
                src={feature.strMealThumb}
            />    
        <div className='md:col-span-4 flex flex-col bg-white p-6 rounded-2xl font-nunito relative'>
          <div className='h-11/12 my-auto'>
              <h1 className='text-xl md:text-3xl font-bold capitalize pb-6 truncate font-nunito'>{feature.strMeal}</h1>
                Ingredients:
              <div className='flex mb-4'>
                <ul>
                    <li>
                      {feature.strMeasure1}
                    </li>
                    <li>
                      {feature.strMeasure2}
                    </li>
                    <li>
                      {feature.strMeasure3}
                    </li>
                    <li>
                      {feature.strMeasure4}
                    </li>
                    <li>
                      {feature.strMeasure5}
                    </li>
                </ul>
                <ul className='ml-4'>
                    <li>
                      {feature.strIngredient1}
                    </li>
                    <li>
                    {feature.strIngredient2}
                    </li>
                    <li>
                      {feature.strIngredient3}
                    </li>
                    <li>
                    {feature.strIngredient4}
                    </li>
                    <li>
                      {feature.strIngredient5}
                    </li>
                </ul>
                
              </div>
              Instructions:
              <p className='truncate'>{feature.strInstructions}</p>
              
              <ArrowNarrowRightIcon
                  className='mt-4 text-red-500 font-bold cursor-pointer hover:text-red-300 absolute right-3 top-8 w-12'
                    onClick={() => onOpen(feature.idMeal)}
              />
          </div>
        </div>
    </div>
  )
}

export default Feature