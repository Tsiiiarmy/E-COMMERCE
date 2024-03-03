import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ShopPage from './ShopPage';
import DetailsPage from './DetailsPage';
import CartPage from './CartPage';
import CartFinalPage from './CartFinalPage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/details" component={DetailsPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/cart-final" component={CartFinalPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
