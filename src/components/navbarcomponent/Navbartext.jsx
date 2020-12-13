import React, { Component } from 'react';
import './Navbartext.css'
class Navbartext extends Component {
    render() {
        return (
            <div>
                <div className="dashboard_text">
                    <a class="z-depth-3">Dashboard</a>
                </div>
                <div className="driver_text">
                    <a class="z-depth-3">All Drivers</a>
                </div>
                <div className="user_text" >
                    <a class="z-depth-3">All Users</a>
                </div>
                <div className="trip_text" >
                    <a class="z-depth-3">All Trips</a>
                </div>
                <div className="credit_text">
                    <a class="z-depth-3">Credit Req</a>
                </div>
                <div className="promo_text">
                    <a class="z-depth-3">Promo code</a>
                </div>
                <div className="balance_text">
                    <a class="z-depth-3">Balance</a>
                </div>
            </div>
        );
    }
}

export default Navbartext;
