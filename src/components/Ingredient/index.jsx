import React from 'react'
import styles from '@/components/Ingredient/index.module.scss'

function Ingredient(props) {
  const { ingredients } = props;
  return (
    <div>
      <span className={styles['ingredient_title']}>Ingredients:</span>
      <div  className={styles['ingredient_grid_item']}>
        {ingredients.map((ingredient, index) => (
          <React.Fragment key={index}>
            <div>{ingredient.name}</div>
            <div>{ingredient.amount}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Ingredient;