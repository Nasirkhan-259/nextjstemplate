import React from 'react'
import AddToCart from './AddToCart'

import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div>This is Product Card
    <div className={styles.card}>
        <AddToCart />
    </div>
    
    </div>
  )
}

export default ProductCard