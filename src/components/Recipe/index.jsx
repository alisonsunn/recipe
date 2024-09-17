import React from 'react'
import Header from '@/components/Header';
import EditPanel from '@/components/EditPanel';
import styles from '@/components/RecipeList/index.module.scss';
import { scssConvert } from '@/utils/scssConvert';
import { useState, useEffect } from 'react';


function Recipe(props) {
  const { recipes, deleteRecipe, onClick, selectrecipeid, selectRecipe, ...rest } = props;

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
    console.log("Updated selected recipe id:", selectrecipeid);
    selectrecipeid === id ? setChosen('chosen') : setChosen('');
  }, [selectrecipeid, id])

  return (
    <div className={classNames}
      onClick={(e) => {
        // e.stopPropagation();
        selectRecipe(id);
      }}>
      <Header name={name} deleteRecipe={deleteRecipe} id={id} ></Header>
      <EditPanel
        servings={servings}
        cookTime={cookTime}
        instructions={instructions}
        ingredients={ingredients} ></EditPanel>
    </div>
  )
}

export default Recipe;
