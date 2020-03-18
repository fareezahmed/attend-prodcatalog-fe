import React from 'react';
import logo from './assets/logo.svg';
import './App.scss';

import Nav from './components/nav'
import Footer from './components/footer'

import ProductList from './containers/productList'

function App() {
  return (
    <div className="App">
      <Nav logo={logo} title="Sports Anywhere" />
      <div className="main-container">
        <ProductList />
      </div>
      <Footer>
        Copyright © Fareez Ahmed 2014
      </Footer>
    </div>
  );
}

export default App;
