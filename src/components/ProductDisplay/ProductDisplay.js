import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} = useContext(ShopContext);

  return (
    <div className="body">
      <div className="product-containerr">
    <div className="image-gallery">
        <img src={product.image} alt="Image 1"/>
        <img src={product.image} alt="Image 2"/>
        <img src={product.image} alt="Image 3"/>
        <img src={product.image} alt="Image 4"/>
    </div>
    <div className="main-image">
        <img src={product.image} alt="Main Image"/>
    </div>
    <div className="product-details">
        <h1>{product.name}</h1>
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <div className="price">
            <span className="old-price">${product.old_price}</span>
            <span className="new-price">${product.new_price}</span>
        </div>
        <div className="description">
            <p>This is a great product that you will love. It has many fantastic features and is available at an affordable price.</p>
        </div>
        <div className="size-chart">
            <h3>Size Chart</h3>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="add-to-cart">Add to Cart</button>
    </div>
   
</div>
</div>


  )
}

export default ProductDisplay
