import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
    <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} className="card-img-top" alt="Not found" /> </Link>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          <span style={{ textDecoration: 'line-through', color: 'red' }}>${props.old_price}</span><br />
          <span style={{ fontWeight: 'bold', color: 'green' }}>${props.new_price}</span>
        </p>
      </div>
    </div>
  );
};

export default Item;
