import React, { useRef } from 'react'
import classes from './AddForm.module.css'
const AddFrom = (props) => {
    const nameInputRef=useRef();
    const descInputRef=useRef();
    const priceInputRef=useRef();
    const lInputRef=useRef();
    const mInputRef=useRef();
    const sInputRef=useRef();

    const addTshirtHandler=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredDesc=descInputRef.current.value;
        const enteredPrice=priceInputRef.current.value;
        const enteredL=lInputRef.current.value;
        const enteredM=mInputRef.current.value;
        const enteredS=sInputRef.current.value;

        props.onAddTshirt(enteredName,enteredDesc,enteredPrice,enteredL,enteredM,enteredS);
         nameInputRef.current.value='';
         descInputRef.current.value='';
         priceInputRef.current.value='';
         lInputRef.current.value='';
         mInputRef.current.value='';
         sInputRef.current.value='';

         console.log('added!!')
    }
  return (
    <div className={classes.addcontainer}>
      <form onSubmit={addTshirtHandler}> 
        <label>Name Of T-shirt</label><input id='name' type='text' ref={nameInputRef}/>
        <label>Description</label><input id='desc' type='text' ref={descInputRef}/>
        <label>Price</label><input id='price' type='number' ref={priceInputRef}/>
        <label>L</label><input id='L' type='number' ref={lInputRef}/>
        <label>M</label><input id='M' type='number' ref={mInputRef}/>
        <label>S</label><input id='S' type='number' ref={sInputRef}/>
        <button type='submit' className='btn btn-dark'>Submit</button>
      </form>
    </div>
  )
}

export default AddFrom
