import CartContext from "./cart-context";

import { useContext, useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let existingItem = false;
    let updateItems;
    if (state.items.find((i) => i.name === action.item.name))
      existingItem = true;
    if (existingItem) {
      updateItems = state.items.map((i) => {
        if (i.name === action.item.name) {
          return { ...action.item, amount: i.amount + 1 };
        }
        return i;
      });
    } else {
      updateItems = state.items.concat(action.item);
    }
    const updateTotalAmount =
      state.totalAmount + action.item.price ;
    const updatedCart = {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
    return updatedCart;
  }
  if (action.type === "REMOVE") {
    let deleteItem = {};
    let updatedItems = state.items.filter((item) => {
      if (item.name === action.id) deleteItem = { ...item };
      return item.name !== action.id;
    });
    if (deleteItem.amount > 1) {
      updatedItems = [
        ...updatedItems,
        { ...deleteItem, amount: deleteItem.amount - 1 },
      ];
    }
    const updateTotalAmount = state.totalAmount - deleteItem.price;
    const updatedCart = {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
    return updatedCart;
  }
  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatcherCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatcherCartAction({ type: "ADD", item: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatcherCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
