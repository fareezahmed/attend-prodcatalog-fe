import React from 'react';
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
import { ProductContextProvider } from './config/productContext';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav logo={logo} title={
          <FormattedMessage id="title" />
        } />
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
          <FormattedMessage id="footer" />
        </Footer>
      </div>
    </Router>
  );
}

export default App;
