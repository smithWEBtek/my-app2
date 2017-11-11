import React from 'react';
import ReactDOM from 'react-dom';
import { getBoxStyle } from './Spiral.js'
 
// const boxes = [
//   React.createElement('div', { style: getBoxStyle(0), key: '0' }, '1'),
//   React.createElement('div', { style: getBoxStyle(1), key: '1' }, '2'),
//   React.createElement('div', { style: getBoxStyle(2), key: '2' }, 'Fizz'),
//   React.createElement('div', { style: getBoxStyle(2), key: '3' }, 'Buzz'),
//   React.createElement('div', { style: getBoxStyle(2), key: '4' }, 'FizzBuzz'),
//   React.createElement('div', { style: getBoxStyle(2), key: '5' }, 'No fizz or buzz')
//     // React.createElement('strong', {}, 'Fizz'),
//     // React.createElement('strong', {}, 'Buzz')
//   // ) ,
// ]

const boxes = []
for (let i = 1; i <= 15; i++) {
  let content = ''
  if (i % 3 === 0) content += 'Fizz'
  if (i % 5 === 0) content += 'Buzz'
  if (content === '') content = String(i)
  else content = React.createElement('strong', {}, content)
  boxes.push(
    React.createElement('div', { style: getBoxStyle(i - 1), key: i }, content)
  )
}

function asdf(){
  //  let number = Math.floor(Math.random(0,1)*100)
  let number = 511

  if (number % 3 === 0 && number % 5 === 0){
    // "FizzBuzz"
   return boxes[4]
  } else 

  if (number % 3 === 0){
    // "Fizz"
    return boxes[2]
  } else
  
  if (number % 5 === 0){
    // "Buzz"
    return boxes[3]
  } else

  if (number % 3 !== 0 && number % 5 !== 0){
    // return "What up, no fizz, no buzz?"
    return boxes[5]
  }
}

const Fizzbuzz = React.createElement('div', {}, asdf());

// export default Fizzbuzz;
export default Fizzbuzz;