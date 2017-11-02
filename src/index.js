import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

const MOUNT1 = document.querySelector('div#root1');
const MOUNT2 = document.querySelector('div#root2');
const MOUNT3 = document.querySelector('div#root3');
const MOUNT4 = document.querySelector('div#root4');
const MOUNT5 = document.querySelector('div#root5');
const MOUNT6 = document.querySelector('div#root6');
const MOUNT7 = document.querySelector('div#root7');
const MOUNT8 = document.querySelector('div#root8');
const MOUNT9 = document.querySelector('div#root9');
const MOUNT10 = document.querySelector('div#root10');
const MOUNT11= document.querySelector('div#root11');
const MOUNT12 = document.querySelector('div#root12');
const MOUNT13 = document.querySelector('div#root13');
const MOUNT14 = document.querySelector('div#root14');
const MOUNT15 = document.querySelector('div#root15');
const MOUNT16 = document.querySelector('div#root16');
const FishTacoElephantDung1 = document.querySelector('div#dung1');

const HelloElement = React.createElement('div', {}, "Hello element created when const was declared.");

const HelloComponent1noProps = () => <div>React component in a function, without props it is that much different than 'HelloElement'</div>;
const HelloComponent2withProps = (props) => <div>React component in a function, with props {props} passed in.</div>;

const Hello = ()=> <div>Hello from React</div>




const TryProps1 = HelloComponent2withProps("blue")

ReactDOM.render(<App />, MOUNT1);
ReactDOM.render(HelloElement, MOUNT2);
ReactDOM.render(React.createElement(HelloComponent1noProps), MOUNT3);


ReactDOM.render(<Hello />, MOUNT4);  // does render
// ReactDOM.render(Hello, MOUNT4); //doesn't error, but doesn't render either (?)


ReactDOM.render(<ol><li>My Song</li><li>My Lunch</li><li>Your Daughter</li><li>My Truck</li></ol>, MOUNT5);

const Hello1 = <ol><li>My Fish</li><li>Your Dog</li><li>Your Scallops</li><li>My Belly</li></ol>
const Hello2 = ('div', {}, "wazzup?");
ReactDOM.render(Hello1, MOUNT6);
ReactDOM.render(Hello2, MOUNT7);

//ES6 syntax for function() {}
// we can pass an element to render(), by writing out a (React.createELement..."), or by using the same 'createElement' encapsulated in a  variable, and using <  /> wrappers


const Hello4 = React.createElement('div', {}, "this is the Hello4 const, using React.createElement, with no props and is an element, not a component, rendered by calling just the variable name React.render(Hello4, MOUNT8).")
ReactDOM.render(Hello4, MOUNT8)


const Hello3 = (props) => <div>Hello3, {props.name} from React</div>
const Hello3props = (props) => <div>Hello3, {props.dog} from React {props.color} with props: {props.name}</div>
const Hello3destructured = ({name, dog, color}) => <div>Hello3destructured with {color} props {dog} destructured: {name}</div>
const Hello3schnaps = (schnaps) => <div>Hello3destructured **{schnaps.bird}**  with **{schnaps.color}** props **{schnaps.dog}** destructured: **{schnaps.name}**</div>
const birdy = "Tweety"
ReactDOM.render(<Hello3 />, MOUNT9)
ReactDOM.render(<Hello3props name="Brad" color="Blue" dog="spot"/>, MOUNT14)
ReactDOM.render(<Hello3destructured name="Brad" color="Blueish " dog="spot" />, MOUNT15)
ReactDOM.render(<Hello3schnaps name="Jimminy Glick" color="pinkish " dog="fido" bird={birdy} />, MOUNT16)

const Pets = ['turtle', 'lobster', 'lemur', 'ferret', 'cat', 'dog', 'fish', 'bird', 'hamster']

const HiPets = () => (
  <div className='App'>
    {Pets.map(pet => <p><Hello3 name={pet} /></p>)}
  </div>
)
ReactDOM.render(<HiPets />, MOUNT12)