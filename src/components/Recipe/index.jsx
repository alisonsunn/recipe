import React from 'react'
import styles from '@/components/Recipe/index.module.scss'
import { scssConvert } from '@/utils/scssConvert'
import { Button } from '@/components/Button/Button'

function Recipe(props) {
  const { recipes, selectReceiptId, className } = props;
  const classNames = scssConvert(className, styles, "container");

  return (
    <>
      <div className={classNames}>
        <div className={styles['title']}>
          <h1>Alison's Recipe Book</h1>
        </div>
        <div className={styles['add']}>
          <Button className='btn-big' onClick="" >Add Recipe</Button>
        </div>
      </div>
    </>
  )
}

export default Recipe