import React from 'react';
import { Link } from "react-router-dom";
import './product-details.scss';

import Button from '../../components/button'
import Card from '../../components/card'

export default (props) => {
  console.log(props.location);
  const params = new URLSearchParams(props.location.search);
  console.log(params.get('id'));
  console.log(params.get('mode'));
  return (
      <div className="product-list">
        <Link to="/">Back</Link>
        <Card />
      </div>  
  );
}

