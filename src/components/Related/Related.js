import React from 'react'
import new_collection  from '../Assets/new_collections'
import Item from '../Item/Item'
const Related = () => {
  return (
    <div>
    <h1 className=" heading text-center">Related Products</h1>
  <hr className="tag1"/>
  <div className="popular-item">
    {new_collection.map((item, i) => (
      <Item
        key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}  
      />
    ))}
  </div>
</div>
  )
}

export default Related
