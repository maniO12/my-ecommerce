import React,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Description from '../components/Description/Description' 
import Related from '../components/Related/Related'
const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId) );
  return (
  <div>
    <Breadcrum product={product} />
    <ProductDisplay product={product}/>
    <Description/>
    <Related/>
  </div>  
  )
}

export default Product
