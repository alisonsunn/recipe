import React from 'react'
import styles from '@/components/RecipeList/index.module.scss'
import { scssConvert } from '@/utils/scssConvert'
import { Button } from '@/components/Button'
import Recipe from '@/components/Recipe'

function RecipeList(props) {
  const { recipes, selectreceiptid, className, addRecipe, deleteRecipe } = props;
  const classNames = scssConvert(className, styles, "container");
  // for each recipe, render a RecipeList component
  const recipe = recipes.map((recipe) => {
    return (
      <Recipe key={recipe.id} recipes={recipe} selectreceiptid={selectreceiptid} deleteRecipe={deleteRecipe} />
    )
  })
  return (
    <>
      <div className={classNames}>
        <div className={styles['title']}>
          <h1>Alison's Recipe Book</h1>
        </div>
        <div className={styles['add']}>
          <Button className='btn-big' onClick={addRecipe} >Add Recipe</Button>
        </div>
        <div >
          {recipe}
        </div>
      </div>
    </>
  )
}

export default RecipeList