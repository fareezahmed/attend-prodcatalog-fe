import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './assets/logo.svg';
import './App.scss';

import Nav from './components/nav'
import Footer from './components/footer'

import ProductList from './containers/productList'
import ProductDetails from './containers/productDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav logo={logo} title="Sports Anywhere" />
        <div className="main">
          <Switch>
            <Route path="/details">
              <ProductDetails />
            </Route>
            <Route path="/">
              <ProductList />
            </Route>
          </Switch>
        </div>
        <Footer>
          Copyright © Fareez Ahmed 2014
        </Footer>
      </div>
    </Router>
  );
}

export default App;
