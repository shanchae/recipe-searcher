/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtoms'

function RecipeDetails({recipe}) {
    const [ open, setOpen ] = useRecoilState(modalState)

  return (
      <Transition.Root show={open} as={Fragment}>

        <Dialog as='div' onClose={setOpen} className='fixed z-10 inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-screen'>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                </Transition.Child>
                <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>&#8203;</span>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    enterTo='opacity-100 translate-y-0 sm:scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                    leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                >
                    <div className='w-8/12 mx-auto bg-orange-50 shadow-xl gap-6 p-6 transform transition-all'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 font-nunito'> 
                                <img 
                                    src={recipe.strMealThumb} 
                                    className='w-full h-full object-cover rounded-lg'
                                    alt="" 
                                />
                            <div className='p-5'>
                                <div className='text-center text-2xl font-bold'>
                                    {recipe.strMeal}
                                </div>
                                <div className='flex flex-col mx-auto w-11/12'>
                                    <h1 className='mt-4'>Ingredients:</h1>
                                    <div className='grid grid-cols-3 mt-2 mx-5'>
                                        <ul className='col-span-1 list-disc space-y-2'>
                                            <li>{recipe.strIngredient1}</li>
                                            <li>{recipe.strIngredient2}</li>
                                            <li>{recipe.strIngredient3}</li>
                                            <li>{recipe.strIngredient4}</li>
                                            <li>{recipe.strIngredient5}</li>
                                            <li>{recipe.strIngredient6}</li>
                                            <li>{recipe.strIngredient7}</li>
                                            <li>{recipe.strIngredient8}</li>
                                            <li>{recipe.strIngredient9}</li>
                                            <li>{recipe.strIngredient10}</li>
                                        </ul>
                                        <ul className='col-span-2 ml-4 space-y-2'>
                                        <li>{recipe.strMeasure1}</li>
                                            <li>{recipe.strMeasure2}</li>
                                            <li>{recipe.strMeasure3}</li>
                                            <li>{recipe.strMeasure4}</li>
                                            <li>{recipe.strMeasure5}</li>
                                            <li>{recipe.strMeasure6}</li>
                                            <li>{recipe.strMeasure7}</li>
                                            <li>{recipe.strMeasure8}</li>
                                            <li>{recipe.strMeasure9}</li>
                                            <li>{recipe.strMeasure10}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-11/12 mx-auto mt-8'>
                            <h1 className='mb-4'>Instructions:</h1>
                            <p>{recipe.strInstructions}</p>
                        </div>
                    </div>
                </Transition.Child>
             </div>
        </Dialog>
      </Transition.Root>
  )
}

export default RecipeDetails