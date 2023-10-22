import React,{useContext} from 'react'
import classes from './ShowList.module.css'
import ItemForm from './ItemForm'
import CartContext from '../../store/cart-context'
const Item = (props) => {
  const cartCtx = useContext(CartContext);

  // const price = `₹ ${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      L:props.L
    });
  };
  return (
    <div>  
      <li key={props.id}>
                <div className={classes.line}>
                    <div>
                        <h2>{props.name}</h2>
                        <h5>₹{props.price}</h5>
                        <label> {props.desc}</label>
                         
                    </div>
                    <div>
                        <div>
                            <button className="btn btn-dark">L - {props.L}</button>
                            <button className="btn btn-dark">M - {props.M}</button>
                            <button className="btn btn-dark">S - {props.S}</button>
                        </div>
                        <div><ItemForm id={props.id} onAddToCart={addToCartHandler}/></div>    
                    </div>
                </div>
            </li>
    </div>
  )
}

export default Item
