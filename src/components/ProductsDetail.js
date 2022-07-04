 import React,{useContext} from 'react';
 import {ProductContext} from '../context/ProductContextProvider';
import { Link , useParams} from 'react-router-dom';
import styles from './ProductDetail.module.css'
 const ProductsDetail = (props) => {
     const params=useParams()
    const id=params.id 
    const data =useContext(ProductContext)
    const product=data[id - 1] 
    const {image,title,description,category,price}=product
     return (
         <div className={styles.container}>
            <img className={styles.image} src={image} alt="product"/>
            <div className={styles.textContainer}>
               
            <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
             
                <p className={styles.category}><span>Category:</span> {category}</p>
           
            <div className={styles.buttonContainer}>
            <p className={styles.price}>{price} $</p>
            <Link to="/product">Back to</Link>
            </div>
         </div>
         </div>
     );
 };
 
 export default ProductsDetail;