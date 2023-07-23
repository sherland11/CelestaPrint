import React from 'react';
import './index.css';
import './css/rest.css';
import './css/header.css';
import './css/products.css';
import './css/products_icons.css';
import './css/typeOfWork.css';
import './css/conditions.css';
import './css/example.css';
import './css/clients.css';
import './css/makeOrder.css';
import Header from './components/Header';
import Products from './components/Products';
import TypeOfWork from './components/TypesOfWork';
import Conditions from './components/Conditions';
import Example from './components/Example';
import Clients from './components/Clients';
import MakeOrder from './components/MakeOrder';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Products></Products>
      <TypeOfWork></TypeOfWork>
      <Conditions></Conditions>
      <Example></Example>
      <Clients></Clients>
      <MakeOrder></MakeOrder>
    </div>
  );
}

export default App;
