import React from 'react'
import { useRef, useState } from 'react';
import classes from './ItemForm.module.css';

const ItemForm = (props) => {
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <button className='btn btn-dark'>Add L</button>
        </form>
    )
}

export default ItemForm
