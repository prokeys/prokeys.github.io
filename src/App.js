import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import GettingStarted from './GettingStarted';
 
export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero/>
      </React.Fragment>
    );
  }

}