import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cart_ctx = useContext(CartContext);
  const cartItemRemoveHandler = (key) => {
    cart_ctx.removeItem(key);
  };
  const cartItemAddHandler = (item) => {
    cart_ctx.addItem(item);
  };
  const cardItems = (
    <ul className={classes["card-items"]}>
      {cart_ctx.items.map((item, key) => {
        return (
          <CartItem
            className
            key={key}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.name)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  const total_amount = `$${cart_ctx.totalAmount.toFixed(2)}`;
  const hasItems = cart_ctx.items.length > 0;
  return (
    <Modal>
      {cardItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total_amount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button-alt"]}
          onClick={props.hideCartHandler}
        >
          Close{" "}
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
