import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import './product-list.scss';

import Button from '../../components/button';
import Card from '../../components/card';

import { products } from '../../config/data.json';
import { ProductContext } from '../../config/productContext';

export default () => {
  const { state, dispatch } = useContext(ProductContext);
  const localState = JSON.parse(localStorage.getItem("products"));

  useEffect(
    () => {
      dispatch({ type: "all", payload:  localState || products });
    },
    [products]
  );

  return (
      <div className="product-list">
        <div className="product-list_nav">
          <Button><Link to="/details?mode=edit">Add</Link></Button>
        </div>
        <div className="product-list_container">
          {
            state && Object.values(state).map(({
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

