import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flap from './Flap';
// import GuestbookApp1 from './GuestbookApp';
// import GuestbookApp2 from './GuestbookApp';
// import Pythagoras from './Pythagoras';
import Fizzbuzz from './Fizzbuzz';

// const { Component } = React

const MOUNT1 = document.querySelector('div#root1');
const MOUNT2 = document.querySelector('div#root2');
const MOUNT3 = document.querySelector('div#root3');
const MOUNT4 = document.querySelector('div#root4');

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
  let todayMsg = null
    switch (dayOfWeek){
      case 7:
       todayMsg = "Sunday, rest day"
      break
      case 1:
        todayMsg = "Somebody has a case of the Mondays!!"
      break
      case 2:
        todayMsg = "Tuesday, hmm hmm..."
      break
      case 3:
        todayMsg = "Hump day"
      break
      case 4:
        todayMsg = "Thursday is party anticipation day..."
      break
      case 5:
        todayMsg = "TGIF !!"
      break
      case 6:
        todayMsg = "Hooray, weekend!!"
      break
    }
    return todayMsg
  }
  
const TodayMsg = React.createElement('div', {}, dayMsg())
const group = ('div', {}, [greeting, dayMsg(dayOfWeek)]);

ReactDOM.render(
  group,
  MOUNT3
);

ReactDOM.render(Fizzbuzz, MOUNT4); 
