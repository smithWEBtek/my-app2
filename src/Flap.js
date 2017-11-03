import React, { Component } from 'react';
import brad from './brad.svg';
import './App.css';

class Flap extends Component {
  render() {
    return (
      <div className="Flapp">
        <header className="App-header">
          <img src={brad} className="App-logo" alt="brad" />
          <h1 className="App-title">Flap it</h1>
        </header>
        <p className="App-intro">
          <code>We love to code code, coding the codes.
          Please check one of the meaningless boxes below.<br />
          We promise that nothing bad will happen...</code>
        </p>
        <h5>...or will it?</h5>
      </div>
    );
  }
}

export default Flap;
