import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import brad from './brad.svg';
import './App.css';

const MOUNT5 = document.querySelector('div#root5');

class GuestbookApp1 extends Component {
  render() {
    return (
    <div className='guestbook'>
      Hello from GuestbookApp 
    </div>
    )
  }
}

ReactDOM.render(<GuestbookApp1 />, MOUNT5)

class GuestbookApp2 extends Component {
  render() {
    return (
      <div className="GuestbookApp">
        <header className="App-header">
          <img src={brad} className="App-logo" alt="brad" />
          <img src={brad} className="App-logo" alt="brad" />
          <img src={brad} className="App-logo" alt="brad" />
          <img src={brad} className="App-logo" alt="brad" />
          <h1 className="App-title">Welcome to the React party!</h1>
        </header>
        <p className="App-intro">
          <code>We love to code code.</code>
        </p>
        <h5>..don't you?</h5>
      </div>
    );
  }
}

export default GuestbookApp1;
