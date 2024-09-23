import React from 'react'
import Header from '@/components/Header';
import Panel from '@/components/Panel';
import styles from '@/components/RecipeList/index.module.scss';
import { scssConvert } from '@/utils/scssConvert';
import { useState, useEffect } from 'react';


function Recipe(props) {
  const { recipes, deleteRecipe, onClick, selectrecipeid, selectRecipe, handleSelectRecipe, lastSelectRecipeId, ...rest } = props;

  const [chosen, setChosen] = useState();

  const {
    id,
    name,
    servings,
    cookTime,
    instructions,
    ingredients
  } = recipes;

  // change the bg color of the selected recipe

  const classNames = scssConvert(chosen, styles, 'recipe');

  useEffect(() => {
    if (selectrecipeid === id) {
      setChosen('chosen')
    } else if (lastSelectRecipeId === id) {
      setChosen('last-chosen')
    } else {
      setChosen('')
    }
    console.log(selectrecipeid, id, lastSelectRecipeId)
  }, [selectrecipeid, id, lastSelectRecipeId])

  return (
    <div className={classNames}
      onClick={(e) => {
        // e.stopPropagation();
        selectRecipe(id);
      }}>
      <Header name={name} deleteRecipe={()=>{deleteRecipe(id)}} id={id} ></Header>
      <Panel
        servings={servings}
        cookTime={cookTime}
        instructions={instructions}
        ingredients={ingredients} ></Panel>
    </div>
  )
}

export default Recipe;
