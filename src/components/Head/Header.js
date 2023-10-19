import React from 'react'
import { Fragment } from 'react';
import classes from './Header.module.css'
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>T-Shirt</h1>
      </header>
    </Fragment>
  )
}
export default Header
