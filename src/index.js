import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './ui/components/App';
// import Connexion from './ui/components/Connexion'
import NotFound from './ui/components/NotFound'
import Login from './ui/components/Login';
// import initScript from './ui/components/initScript';


const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/pseudo/:pseudo' component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
debugger;
ReactDOM.render(<Root />, document.getElementById('root'))
// ReactDOM.render(React.createElement(initScript, { context: $('body') }), document.getElementById('root'));
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
