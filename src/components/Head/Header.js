import React from 'react'
import { Fragment } from 'react';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>T-Shirt</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
    </Fragment>
  )
}
export default Header
