import React, { Component } from 'react';
import './Pagecontent.css'
import DriverTable from '../table/DriverTable'
import BoxView from '../box/BoxView'
const title_rec = {
    marginLeft: '370px',
    color: 'black'
}

class Pagecontent extends Component {
    render() {
        return (
            <div>
                <article className="box"  >
                    <nav className="nav-color">
                        <h4 style={title_rec} >Admin dashboad</h4>
                    </nav>
                    <DriverTable />
                    <BoxView />

                </article>
            </div>
        );
    }
}

const drawPichart = () => {

    return ({


    })


}


export default Pagecontent;