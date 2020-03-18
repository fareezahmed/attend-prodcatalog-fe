import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import logo from './assets/logo.svg';
import './App.scss';

import Nav from './components/nav'
import Footer from './components/footer'
import NotFound from './components/notFound'

import ProductList from './containers/productList'
import ProductDetails from './containers/productDetails'

import { products } from './config/data.json';
import { ProductContextProvider } from './config/productContext';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav logo={logo} title="Sports Anywhere" />
        <ProductContextProvider>
          <div className="main">
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route exact path="/details" component={ProductDetails} />
              <Route exact component={NotFound} />
            </Switch>
          </div>
        </ProductContextProvider>
        <Footer>
          Copyright © Fareez Ahmed 2014
        </Footer>
      </div>
    </Router>
  );
}

export default App;
