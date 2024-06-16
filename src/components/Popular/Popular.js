import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className="popular">
      <h1 className=" heading text-center">POPULAR IN WOMEN</h1>
      <hr className="tag1"/>
      <div className="popular-item">
        {data_product.map((item, i) => (
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
  );
};

export default Popular;

