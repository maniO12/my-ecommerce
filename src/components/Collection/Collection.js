import React from 'react'
import Item from '../Item/Item'
import new_collection from '../Assets/new_collections'
const Collection = () => {
  return (
    <div>
        <h1 className=" heading text-center">New Collection</h1>
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

export default Collection
