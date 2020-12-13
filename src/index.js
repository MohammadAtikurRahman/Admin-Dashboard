import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SignOutAdmin from './components/logininfo/SignOutAdmin'

import {
  Route,
  Link,BrowserRouter as Router
} from "react-router-dom";

const myRouter=(
   <Router>

        <div>
             <li><Link to="/signoutadmin">Sign out</Link> </li>

        </div>

                  

     </Router>




)





ReactDOM.render(
  <React.StrictMode>
     <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
