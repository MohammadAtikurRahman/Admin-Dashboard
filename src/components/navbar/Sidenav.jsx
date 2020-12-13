import React, { Component } from 'react';
import './Sidenav.css'
import Navbarcomponent from '../navbarcomponent/Navbarcomponent'
import Navbartext from '../navbarcomponent/Navbartext'

const position_icon = {
    marginLeft: '40px',
    color: 'white'
}
class Sidenave extends Component {
    render() {
        return (

            <div className="Sidenav">
                <i style={position_icon} className="large material-icons">account_circle</i>
                <h6>Admin-Panel</h6>
                <div className="Sidenav_another">
                    <Navbarcomponent />
                    <Navbartext />
                </div>
            </div>
        );
    }
}

export default Sidenave;
