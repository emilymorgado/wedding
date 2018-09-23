import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Suggestions from './components/Suggestions';
import Help from './components/Help';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/suggestions' component={Suggestions} />
        <Route path='/offerhelp' component={Help} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
