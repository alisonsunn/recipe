import React from 'react'
import styles from '@/components/RecipeList/index.module.scss'
import { scssConvert } from '@/utils/scssConvert'
import { Button } from '@/components/Button'
import Recipe from '@/components/Recipe'
import { useState, useRef, useEffect } from 'react'

function RecipeList(props) {

  const { recipes, selectrecipeid, className, handleAddRecipe, deleteRecipe, selectRecipe, handleSelectRecipe, lastSelectRecipeId } = props;

  const [addRecipe, setAddRecipe] = useState(false);
  const ref = useRef();
  const addNewRecipe = () => {
    handleAddRecipe();
    setAddRecipe(true);
  }

  useEffect(() => {
    if (addRecipe) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      });
    }
    setAddRecipe(false);
  }, [addRecipe])

  const classNames = scssConvert(className, styles, "container");

  // for each recipe, render a RecipeList component
  const recipe = recipes.map((recipe) => {
    return (
      <Recipe
        key={recipe.id}
        recipes={recipe}
        selectrecipeid={selectrecipeid}
        deleteRecipe={deleteRecipe}
        selectRecipe={selectRecipe}
        handleSelectRecipe={handleSelectRecipe}
        lastSelectRecipeId={lastSelectRecipeId}
      />
    )
  })
  return (
    <>
      <div className={classNames}>
        <div className={styles['title']}>
          <h2>Alison's Recipe Book</h2>
        </div>
        <div className={styles['add']}>
          <Button className='btn-big' onClick={addNewRecipe} >Add Recipe</Button>
        </div>
        <div >
          {recipe}
        </div>
        <div className={styles['add']}>
          <Button className='btn-big' onClick={addNewRecipe} >Add Recipe</Button>
        </div>
        <div ref={ref}></div>
      </div>
    </>
  )
}

export default RecipeList