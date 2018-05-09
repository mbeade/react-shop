
import React from 'react';
import styles from './Product.css';

const Item = ({ product }) =>
    <div className={styles.productCard}>
        <div >
            <p className={styles.productTitle}>{product.name}</p>
        </div>
        <div>
            <p>$ {product.price}</p>
        </div>
    </div>
export default Item;