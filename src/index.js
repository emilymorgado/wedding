import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './components/Home';
import Suggestions from './components/Suggestions';
import Help from './components/Help';
import reducers from './store/reducers';


ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/suggestions' component={Suggestions} />
          <Route path='/offerhelp' component={Help} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
