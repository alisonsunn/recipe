import React from 'react'
import Header from '@/components/Header';
import EditPanel from '@/components/EditPanel';
import styles from '@/components/RecipeList/index.module.scss';

function Recipe(props) {
  const { recipes, deleteRecipe, ...rest } = props;
  const {
    id,
    name,
    servings,
    cookTime,
    instructions,
    ingredients
  } = recipes;
  console.log(id);
  return (
    <div className={styles['recipe']}>
      <Header name={name} deleteRecipe={deleteRecipe} id={id} ></Header>
      <EditPanel
        servings={servings}
        cookTime={cookTime} 
        instructions={instructions} ingredients={ingredients} ></EditPanel>
    </div>
  )
}

export default Recipe;
