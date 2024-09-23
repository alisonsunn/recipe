import React from 'react'
import Ingredient from '@/components/Ingredient'
import Instruction from '@/components/Instruction'
import styles from './index.module.scss'

function Panel(props) {
  const { recipes, servings, cookTime, instructions, ingredients } = props;
  return (
    <div className={styles['panel']}>
      <div>
        <span className={styles['title']}>Cook Time:</span>
        <span className={styles['info']}>{cookTime}</span>
      </div>
      <div>
        <span className={styles['title']}>Servings:</span>
        <span className={styles['info']}>{servings}</span>
      </div>
      <Instruction instructions={instructions}></Instruction>
      <Ingredient ingredients={ingredients}></Ingredient>
    </div>
  )
}

export default Panel;