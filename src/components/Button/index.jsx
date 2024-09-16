import React from 'react'
import styles from '@/components/Button/index.module.scss';
import { scssConvert } from '@/utils/scssConvert';

export const Button = (props) => {
  const { className, ...rest } = props;
  const classNames = scssConvert(className, styles, 'btn btn-primary');
  return (
    <>
      <span className = {classNames} {...rest}></span>
    </>
  )
}

export default Button;
