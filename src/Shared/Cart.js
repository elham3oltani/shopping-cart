import React, { useContext } from "react";

import { CartContext } from "../context/CartContextProvider";
import styles from "./Cart.module.css"
import { shortText } from "../helper/function";
import Trush from "../Icons/trash.svg"
const Cart = (props) => {
  const { sate,dispatch } = useContext(CartContext);

  const { image, title, price, quantity } = props.data;
  return (
    <div className={styles.container} >
      <img src={image} className={styles.productImage} alt="product" />
      <div  className={styles.data}>
        <h3>{shortText(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>

      <div className={styles.buttonContainer}>
            {
                quantity > 1 ?
                <button onClick={()=>dispatch({type:"DECRESS",payload:props.data})}>-</button>:
                <button onClick={()=>dispatch({type:"REMOVE-ITEM",payload:props.data})}><img src={Trush} alt="product"/></button>
            }
         <button onClick={()=>dispatch({type:"INCRESS",payload:props.data})}>+</button>
      </div>
    </div>
  );
};

export default Cart;
