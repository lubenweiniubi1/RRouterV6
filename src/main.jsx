import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import { BrowserRouter as Router } from 'react-router-dom';

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
