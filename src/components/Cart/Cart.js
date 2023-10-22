import React from 'react'
import CartIcon from '../Cart/CartIcon'
import CartItem from '../Cart/CartItem'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import { useContext,useEffect,useState } from 'react'
const Cart = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx= useContext(CartContext);
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
      };  
      const cartItems = (
        <ul className={classes['cart-items']}>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              // size={item.L}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );  
  return (
    <div>
      
    </div>
  )
}

export default Cart