import React from 'react'
import styles from '@/components/Header/index.module.scss';
import Button from '@/components/Button';
import { scssConvert } from '@/utils/scssConvert';

export const Header = (props) => {
  const { name, className, ...rest } = props;
  const classNames = scssConvert('recipe_header', styles, className);
  
  return (
    <div {...rest} className={classNames}>
      <h3 className={styles['recipe_title']}>{name}</h3>
      <Button className='btn-danger'>Delete</Button>
    </div>
  )
}

export default Header;
