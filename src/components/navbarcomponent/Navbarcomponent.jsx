import React, { Component } from 'react';
import './Navbarcomponent.css'
class Navbarcomponent extends Component {
    render() {
        return (
            <div>
                {/* DashBoard */}
                <div className="dashboard" >
                    <i class="material-icons">dashboard </i>
                </div>
                {/* All Driver */}
                <div className="driver_list" >
                    <i class="material-icons">assignment_ind</i>
                </div>
                {/* All Agent */}
                <div className="agent" >
                    <i class="material-icons">person_pin</i>
                </div>
                {/* All trips */}
                <div className="trips" >
                    <i class="material-icons">motorcycle</i>
                </div>
                {/* Promo Codes*/}
                <div className="promo" >
                    <i class="material-icons">input</i>
                </div>
                {/* credit request */}
                <div className="credit_req" >
                    <i class="material-icons">attach_money</i>
                </div>
                {/* using for  main body*/}
                <div className="balance">
                    <i class="material-icons">monetization_on</i>
                </div>
            </div>
        );
    }
}

export default Navbarcomponent;