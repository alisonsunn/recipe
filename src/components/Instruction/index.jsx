import React from 'react'
import styles from '@/components/Instruction/index.module.scss'

function Instruction(props) {
  const { instructions } = props;
  return (
    <div>
      <span className={styles['instruction_title']} >Instructions:</span>
      {instructions.map((instruction, index) => (
        <p key={index} className={styles['instruction_item']}>{instruction}</p>
      ))}
    </div>
  )
}

export default Instruction;