import React, { useEffect, useContext }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { FormattedMessage } from 'react-intl';
// Styles and Assets
import logo from './assets/logo.svg';
import './App.scss';
// Components
import Nav from './components/nav';
import Footer from './components/footer';
import NotFound from './components/notFound';
// Containers
import ProductList from './containers/productList';
import ProductDetails from './containers/productDetails';
// Config
import * as Types from './config/constants/actionTypes';
import { ProductContext } from './config/productContext';
import { products } from './config/data.json';

function App() {
  const { dispatch } = useContext(ProductContext);
  const localState = JSON.parse(localStorage.getItem("products"));

  useEffect(
    () => {
      dispatch({ type: Types.LIST_ALL, payload: localState || products });
      if(!localState) {
        localStorage.setItem("products", JSON.stringify(products))
      }
    },
    [dispatch, localState]
  );
  return (
    <Router>
      <div className="App">
        <Nav logo={logo} title={
          <FormattedMessage id="title" />
        } />
        <div className="main">
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/details" component={ProductDetails} />
            <Route exact component={NotFound} />
          </Switch>
        </div>
        <Footer>
          <FormattedMessage id="footer" />
        </Footer>
      </div>
    </Router>
  );
}

export default App;
