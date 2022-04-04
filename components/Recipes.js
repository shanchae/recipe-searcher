import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react/cjs/react.development'
import Recipe from './Recipe'
import PageNavigate from './PageNavigate'


function Recipes({searchRecipe, onOpen}) {
    const [ recipes, setRecipes] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const postsPerPage = 12
  
    useEffect(() => {
      const getRecipes = async () => {
        const resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`)
  
        setRecipes(resp.data.meals)
       
        console.log(resp.data.meals)
      }
  
      return getRecipes()
    
    }, [searchRecipe])

    const indexOLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOLastPost - postsPerPage
    const currentRecipes = recipes.slice(indexOfFirstPost, indexOLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='flex flex-col pb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 justify-items-center w-10/12 mx-auto mt-10 pb-10'>
        {currentRecipes == null ? <h1>NOT FOUND</h1> : currentRecipes.map((recipe) => (
            <Recipe
              key={recipe.idMeal}
              img={recipe.strMealThumb}
              name={recipe.strMeal}
              id={recipe.idMeal}
              onOpen={onOpen}
            />
        ))}
      </div>
      <PageNavigate
        postsPerPage={postsPerPage}
        totalPosts={recipes.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Recipes