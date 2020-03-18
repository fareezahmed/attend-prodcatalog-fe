import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './product-list.scss';

import Button from '../../components/button';
import Card from '../../components/card';

import { ProductContext } from '../../config/productContext';

export default () => {
  const products = useContext(ProductContext);
  console.log(products)
  return (
      <div className="product-list">
        <div className="product-list_nav">
          <Button><Link to="/details">Add</Link></Button>
        </div>
        <div className="product-list_container">
          {
            products.map(({
              id,
              name,
              description,
              price,
              inventoryDate
            }, i) => {
              return <Card key={id} id={id} title={name} desc={description} price={price} date={inventoryDate} />
            })
          }
        </div>
      </div>  
  );
}

