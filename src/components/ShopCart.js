import React,{useContext} from 'react';
import {CartContext} from '../context/CartContextProvider';
import Cart from '../Shared/Cart';
import {Link} from "react-router-dom"

import styles from "./ShopCart.module.css"
function ShopCart(props) {
    const {state,dispatch}= useContext(CartContext)
   
    return (
        <div className={styles.container}>
      <div className={styles.cartContainer}>
          {state.selectedItems.map(item=> <Cart key={item.id} data={item}  />)}
      </div>
      {
          state.itemsCounter > 0 && <div className={styles.payments}>

              <p><span>total items:</span>{state.itemsCounter}</p>
              <p><span>payment:</span>{state.total}</p>
              <div className={styles.buttonContainer}>
                <button className={styles.clear} onClick={()=>dispatch({type:"CHECKOUT"})}>check out</button>
                <button className={styles.checkout} onClick={()=>dispatch({type:"CLEAR"})}>clear</button>
                  </div>
              </div>
      }

      {

        state.chekout && <div className={styles.complete}>

            <h3>check out suuccess fully</h3>
            <Link to="/products">buy more</Link>
        </div>
      }

{

!state.chekout && state.itemsCounter===0 && <div className={styles.complete}>

    <h3>clear suuccess fully</h3>
    <Link to="/products">go back to shop</Link>
</div>
}
        </div>
    );
}

export default ShopCart;