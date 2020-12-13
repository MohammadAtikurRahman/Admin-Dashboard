import React, { Component } from 'react';
 import App from '../../App'
 import Body from '../body/Body'
import { Redirect } from "react-router-dom";
import SignInAdmin from '../logininfo/SignInAdmin'
import SignOutAdmin from '../logininfo/SignOutAdmin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink
} from "react-router-dom"


import './Navbar.css'
import Sidenave from './Sidenav';
import BoxView from '../box/BoxView';
import DriverTable from '../table/DriverTable'

class Navbar extends Component {



  render() {


   
    return (

       

      <Router>
      
            <nav className='nav'>
              <div class="nav-wrapper">
                <ul id="nav" class="right hide-on-med-and-down">
                     
                      
                    <li>
                    <NavLink to="/signoutadmin">Sign out</NavLink>
                    </li>




                </ul>
             
                 

              </div>

              
            </nav>
            
      </Router>
     );
   }
}
export default Navbar;
