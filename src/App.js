import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
 
export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero/>

        <div className="container py-5">
          <div className="row">
            <div className="col">
              <h1 className="pb-5 heading-font display-3 text-center">About</h1>
              <p className="lead text-justify">
                <span className="heading-font h3">proKeys&nbsp;</span> is a text expander for the web that maximizes your productivity and let's you focus on the content not the typing!
                <br/><br/>
                Never waste a second on repetitive typing and the tedium of copy-paste again. Impress your boss and colleagues with a spike in your productivity!
                <br/><br/>
                This user-friendly text expander lets you save largish text expansions and associate them with short abbreviations. We support plain or styled text, local and sync browser storage, clipboard macros, date and time macros, dynamic value fields in expansions, dynamic math, omnibox support, and much more!
                <br/><br/>
                Your words-per-minute will skyrocket, your colleagues will swoon at your productivity, online drudgery of the corporate world won't touch you, and you'll never bother with the Herculean task of right-click, copy, go-somewhere-else, right-click...
              </p>
            </div>
          </div>
        </div>

        <div className="py-5">&nbsp;</div>
      </React.Fragment>
    );
  }

}