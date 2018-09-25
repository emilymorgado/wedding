import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'components/Home';
import Suggestions from 'components/Suggestions';
import Help from 'components/Help';


export default () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/suggestions' component={Suggestions} />
          <Route path='/offerhelp' component={Help} />
        </Switch>
    </BrowserRouter>
  );
};
