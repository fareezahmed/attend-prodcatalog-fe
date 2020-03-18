import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import './product-list.scss';

import Card from '../../components/card';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { products } from '../../config/data.json';
import { ProductContext } from '../../config/productContext';

export default () => {
  const { state, dispatch } = useContext(ProductContext);
  const localState = JSON.parse(localStorage.getItem("products"));

  useEffect(
    () => {
      dispatch({ type: "all", payload:  localState || products });
    },
    [localState, dispatch]
  );

  const onChangeHander = (e) => {
    if(e.target.value){
      dispatch({ type: "search", payload: e.target.value });
    } else {
      dispatch({ type: "all", payload:  localState || products });
    }
  }

  return (
      <div className="product-list">
        <div className="product-list_nav">
          <Link className="btn btn--primary btn--mini" to="/details?mode=edit">Add</Link>
          <div className="product-list_search">
            <div className="product-list_search_icon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChangeHander}
            />
          </div>
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
