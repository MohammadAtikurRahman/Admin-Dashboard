import React, { Component } from 'react';
import './BoxView.css'
class BoxView extends Component {
    render() {
        return (

            <div >
                 <div class="container z-depth-5 card" className="box_position"  >
                    <p className="color1">Current Balance</p>
                </div>

                <div class="container z-depth-5 card" className="box_position1"  >
                    <p className="color1">Total Ride</p>
                </div>

                <div class="container z-depth-5 card" className="box_position2"  >
                    <p className="color1">Total Driver</p>
                </div>

                <div class="container z-depth-5 card" className="box_position3"  >
                    <p className="color1">Total Passengers</p>
                </div>
            </div>

        );
    }
}

export default BoxView;

