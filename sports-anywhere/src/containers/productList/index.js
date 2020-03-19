import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// Styles
import './product-list.scss';
// Components
import Card from '../../components/card';
// Config
import { products } from '../../config/data.json';
import * as Types from '../../config/constants/actionTypes';
import { ProductContext } from '../../config/productContext';

const localState = JSON.parse(localStorage.getItem("products"));

export default () => {
  const { state, dispatch } = useContext(ProductContext);
 
  useEffect(
    () => {
      dispatch({ type: Types.LIST_ALL, payload:  localState || products });
    },
    [dispatch]
  );

  const onChangeHander = (e) => {
    if(e.target.value){
      dispatch({ type: Types.SEARCH_PRODUCT, payload: e.target.value });
    } else {
      dispatch({ type: Types.LIST_ALL, payload:  localState || products });
    }
  }

  return (
      <div className="product-list">
        <div className="product-list_nav">
          <Link className="btn btn--primary btn--mini" to="/details?mode=edit">
            <FormattedMessage id="add" />
          </Link>
          <div className="product-list_search">
            <div className="product-list_search_icon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={ onChangeHander }
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
            }) => {
              return <Card key={id} id={id} title={name} desc={description} price={price} date={inventoryDate} />
            })
          }
        </div>
      </div>  
  );
}
