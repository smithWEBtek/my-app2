import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flap from './Flap';
// import GuestbookApp1 from './GuestbookApp';
// import GuestbookApp2 from './GuestbookApp';
// import Pythagoras from './Pythagoras';

// const { Component } = React

const MOUNT1 = document.querySelector('div#root1');
const MOUNT2 = document.querySelector('div#root2');
const MOUNT3 = document.querySelector('div#root3');

// const names = ['Ari', 'Nate', 'Ginger', 'Anna', 'Sonia']

// const Hello = ()=> <div>Hello from React</div>
// const Hello = ({name}) => (<div>Hello {name} </div>)
 
ReactDOM.render(<App />, MOUNT1);
ReactDOM.render(<Flap />, MOUNT2); 




let greeting
if (new Date().getHours() < 12) {
  const style = { color: 'green' }
  greeting = React.createElement('h1', { style }, "Good morning!")
}
else {
  const style = { color: 'red' }
  greeting = React.createElement('h1', { style }, "Good afternoon!")
}

const dayOfWeek = new Date().getDay()

function dayMsg(){
  let today = null
    switch (dayOfWeek){
      case 7:
       today = "Sunday, rest day"
      break
      case 1:
        today = "Somebody has a case of the Mondays!!"
      break
      case 2:
        today = "Tuesday, hmm hmm..."
      break
      case 3:
        today = "Hump day"
      break
      case 4:
        today = "Thursday is party anticipation day..."
      break
      case 5:
        today = "TGIF !!"
      break
      case 6:
        today = "Hooray, weekend!!"
      break
    }
    return today
  }
  
const Today = React.createElement('div', {}, dayMsg())
// ReactDOM.render() expects a single element, so if you want to render
// multiple elements, wrap them in an empty `div`
const group = ('div', {}, [greeting, dayMsg(dayOfWeek)]);

// If a child is `null`, `false` or `undefined`, React is smart enough
// to not render anything

ReactDOM.render(
  group,
  MOUNT3
);
// ReactDOM.render(<Pythagoras />, MOUNT2); 
