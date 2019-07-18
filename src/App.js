import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
 
export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero/>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="py-5 heading-font">About</h1>
              <p className="lead">proKeys is a text expander for the web that maximizes your productivity and let's you focus on the content not the typing!</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}