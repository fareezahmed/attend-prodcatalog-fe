import React from 'react';
import { Link } from "react-router-dom";
import './product-list.scss';

import Button from '../../components/button'
import Card from '../../components/card'

function App() {
  return (
      <div className="product-list">
        <div className="product-list_nav">
          <Button><Link to="/details">Add</Link></Button>
        </div>
        <div className="product-list_container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>  
  );
}

export default App;
