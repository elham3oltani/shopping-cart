import React,{useContext} from 'react';
import {CartContext} from "../context/CartContextProvider"
import { shortText,IsInCart,quantityCount } from '../helper/function';
import { Link } from 'react-router-dom';
import styles from '../Shared/Product.module.css'
import trash from "../Icons/trash.svg"
const Product = ({productData}) => {
    const {state,dispatch}=useContext(CartContext);
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product"/>
            <h3>{shortText(productData.title)}</h3>
            <p>{productData.price} $</p>
        <div className={styles.linkContainer}>

               <Link to={`/products/${productData.id}`}>Detail</Link>
               <div className={styles.buttonContainer}>
               
                 
                  {quantityCount(state,productData.id)===1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"REMOVE-ITEM",payload:productData})}><img className={styles.trashBtn} src={trash} alt="trash" /></button>}
                 
               
                  {quantityCount(state,productData.id)>1 && <button className={styles.smallButton} onClick={()=>dispatch({type:"DECRESS",payload:productData})}>-</button>}
                  {quantityCount(state,productData.id) > 0 && <span className={styles.counter}>{quantityCount(state,productData.id)}</span>}
                  {
                      IsInCart(state,productData.id) ? 
                     <button className={styles.smallButton} onClick={()=>dispatch({type:"INCRESS" , payload:productData})}>+</button>:
                     <button onClick={()=>dispatch({type:"ADD_ITEMS",payload:productData})}>Add to cart </button>
                  }
               </div>
            </div>

        </div>
    );
};

export default Product;