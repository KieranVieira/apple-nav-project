import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import TopNav from './components/TopNav/TopNav';
import SubNav from './components/SubNav/SubNav';
import Product from './components/Product/Product'
import data from './assets/products'
import './App.css';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
      <TopNav />
      <Route 
        exact
        path="/:productLine" 
        render={props => <SubNav {...props} products={data}/>}
      /> 
      <Route 
        exact 
        path="/:productLine/:product" 
        render={props => <Product {...props}/>}
      /> 
      </div>
    );
  }
}

export default App;
