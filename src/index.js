import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/Home';
import Suggestions from './components/Suggestions';
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <div>
      {/* <Switch> */}
        <Route exact path='/' component={Home}/>
        <Route path='/suggestions' component={Suggestions}/>
      {/* </Switch> */}
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
