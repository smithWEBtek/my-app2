import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flap from './Flap';
import GuestbookApp1 from './GuestbookApp';

const { Component } = React

const MOUNT1 = document.querySelector('div#root1');
const MOUNT2 = document.querySelector('div#root2');
const MOUNT3 = document.querySelector('div#root3');

const names = ['Ari', 'Nate', 'Ginger', 'Anna', 'Sonia']

// const Hello = ()=> <div>Hello from React</div>
const Hello = ({name}) => (<div>Hello {name} </div>)
 
 

ReactDOM.render(<App />, MOUNT1);
ReactDOM.render(<Flap />, MOUNT2); 
ReactDOM.render(<GuestbookApp1 />, MOUNT3); 
