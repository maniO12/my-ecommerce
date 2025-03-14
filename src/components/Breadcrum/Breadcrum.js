import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum">
 Home <img src={arrow_icon}  alt="notfound"/> Shop <img src={arrow_icon}  alt="notfound"/> {product.category} <img src={arrow_icon}  alt="notfound"/> {product.name}
    </div>
  )
}

export default Breadcrum
