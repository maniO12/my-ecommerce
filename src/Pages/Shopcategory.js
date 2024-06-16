import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item/Item.js'

const Shopcategory = (props) => {
  const {all_product} = useContext(ShopContext)

  return (
    <div className="category">
      <img src={props.banner} alt="not found"/>
      <div className="container-fluid">
        <div className="row mt-3">
       
            <div className="col-md-4">
                <h1 className="list">12 out of 36 products</h1>
            </div>
            <div className="col-md-12 text-end">
                <div className="dropdown ">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort by
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" >Price low to high</a></li>
                        <li><a className="dropdown-item">price high to low</a></li>
                    </ul>
                </div>
            </div>
        </div>
   </div>
<div className="product-container">
{all_product.map((item, i) => {
if(item.category === props.category){
         return  <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
}
else{
  return null;
}
})}
</div>
<div className="explore">
   <button className="explorebtn">More...</button>
</div>
   </div>
    
  
  )
}

export default Shopcategory