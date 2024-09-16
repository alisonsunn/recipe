import React from 'react'
import Header from '@/components/Header';
import EditPanel from '@/components/EditPanel';
import styles from '@/components/RecipeList/index.module.scss';

function Recipe(props) {
  const { recipes, ...rest } = props;
  const {
    id,
    name,
    servings,
    cookTime,
    instructions,
    ingredients
  } = recipes;
  return (
    <div className={styles['recipe']}>
      <Header name={name} {...rest}></Header>
      <EditPanel
        servings={servings}
        cookTime={cookTime} 
        instructions={instructions} ingredients={ingredients} {...rest}></EditPanel>
    </div>
  )
}

export default Recipe;
