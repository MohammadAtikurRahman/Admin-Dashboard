import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'
import Pagecontent from '././components/body/Pagecontent'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Body/>
        <Pagecontent/>
      </div>
    );
  }
}

export default App;



