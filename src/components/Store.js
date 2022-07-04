import React,{useContext} from 'react';
import Product from '../Shared/Product';
import { ProductContext } from '../context/ProductContextProvider';
import styles from '../components/Store.module.css';
const Store = () => {
    const products=useContext(ProductContext)
    return (
        <div className={styles.container}>
            {products.map(item=><Product key={item.id} productData={item}/>)}
        </div>
    );
};

export default Store;