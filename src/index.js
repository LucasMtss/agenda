import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Cadastro from './Components/Cadastro'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/cadastro" component={Cadastro} />

    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

