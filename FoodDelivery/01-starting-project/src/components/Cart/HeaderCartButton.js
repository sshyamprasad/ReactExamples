import React,{useContext} from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from './CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartNumbers = cartCtx.items.reduce((currentNumber, item)=>{
    return currentNumber + item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.showCartHandler}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartCtx.items.length}</span>
    </button>
  )
}

export default HeaderCartButton