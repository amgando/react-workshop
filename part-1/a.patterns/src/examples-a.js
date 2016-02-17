// ES5 with CommonJS style ("current approach")
// var React = require('react')
// var ReactDOM = require('react-dom')

// ES6 style ("future approach")
import React from 'react'
import ReactDOM from 'react-dom'



///////////////////////////////////////////////////////////////////////////////

// All the below are "pure", "stateless" components that take no properties
// and the point of this file is to show you all the varieties of React syntax
// so when you're reading other peoples' code you're not disoriented by it

///////////////////////////////////////////////////////////////////////////////

// this file is structured as follows:

// ES5
// - React API without JSX
// - JSX feels like HTML

// - using function declaration
// - using function expression
// - [most common] using React.createClass
// - using Object.create to extend React.Component

// - using higher order IIFEs (note: anonymous vs. named functions)


// ES6 (note: let / const vs var)
// - using arrow functions (note: implicit vs explicit returns)
// - using React.createClass
// - using class syntax to extend React.Component



///////////////////////////////////////////////////////////////////////////////
// ES5 ////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// you can write React components using their API without any JSX
function Ex1a(){
  return React.createElement('div', null,
    React.createElement('strong', null, 'Ex1a: '),
    React.createElement('span', null, 'hello world')
  )
}

// and you can write the same thing using JSX
function Ex1b(){
  return <div><strong>Ex1b: </strong><span>hello world</span></div>
}

// and if you format it as a hierarchy it feels pretty much like HTML
function Ex1c(){
  return <div>
    <strong>Ex1c: </strong>
    <span>hello world</span>
  </div>
}

// as with all 3 examples above, ES5 function declarations work fine
function Ex2(){
  return <div>this is an ES5 function <strong>declaration</strong> with JSX in the return statement</div>
}

// and so do function expressions, both of them properly set "DisplayName" on the component (see React Developer Tools console)
var Ex3 = function(){
  return <div>this is an ES5 function <strong>expression</strong> with JSX in the return statement</div>
}

// but if we use an IIFE to return an anonymous function, our debug output isn't as helpful (see React Developer Tools console)
var Ex4a = (function(){
  return function(){
    return <div>this is an ES5 IIFE returning an <strong>anonymous</strong> function with JSX in the return statement</div>
  }
}())

// unless we name the returned function, in which case we're back to a useful "DisplayName" for the component
var Ex4b = (function(){
  return function Ex4b(){
    return <div>this is an ES5 IIFE returning a <strong>named</strong> function with JSX in the return statement</div>
  }
}())

///////////////////////////////////////////////////////////////////////////////
// using React.createClass()
///////////////////////////////////////////////////////////////////////////////

// by far the most common syntax to create React components is using React.createClass
var Ex5 = React.createClass({
  render: function(){
    return <div>this example uses React.createClass and implements an explicit render method in ES5</div>
  }
})


// - using Object.create to extend React.Component
// found this here: http://www.bennadel.com/blog/3017-extending-react-component-using-es5-with-reactjs-0-14.htm
//  but couldn't get it to work.  getting complaints about 'prototype' and expect it's a conflict between es6 expecations
//  i parsing this file cs es5 syntax.
// var Ex5xxx = {}

// var Ex5xxx.prototype = Object.create( React.Component.prototype );

////         ^    syntax complaints hit here and here   ^

// function Ex5xxx( initialProps ) {
//   React.Component.call( this, initialProps );
//   this.render = render;
//   function render() {
//     return <div>this example uses React.createClass and implements an explicit render method in ES5</div>
//   }
// }


///////////////////////////////////////////////////////////////////////////////
// using ES6 arrow function expressions to create pure, stateless components
///////////////////////////////////////////////////////////////////////////////

// you can also write React components as ES6 functions (assuming you've setup transpiling to ES5)
let Ex6a = () => <div>this is an ES6 arrow function with JSX in its <strong>implicit</strong> return statement</div>

// notice the difference between 1-liner implicit return above and here, if you use braces you need a return
let Ex6b = () => {
  return <div>this is an ES6 arrow function with JSX in its <strong>explicit</strong> return statement</div>
}

// better to use the const keyword since we wouldn't expect these component identifiers to be reassigned
const Ex6c = () => <div>just using a <strong>const</strong> instead of let</div>

///////////////////////////////////////////////////////////////////////////////
// using React.createClass()
///////////////////////////////////////////////////////////////////////////////

// again, by far the most common syntax if you need anything more than just render()
const Ex7 = React.createClass({
  render(){
    return <div>using React.createClass from an ES6 method</div>
  }
})

///////////////////////////////////////////////////////////////////////////////
// using ES6 classes to extend React.Component
///////////////////////////////////////////////////////////////////////////////

class Ex8 extends React.Component {
  render(){
    return <div>and extending React.Component</div>
  }
}


class Ex9 extends React.Component {
  render(){
    return <div>
      <strong>Ex10: </strong>
      {' '}
      this is an ES6 function using 'div', 'strong' and a spacer
    </div>
  }
}


class Examples extends React.Component {
  render(){
    return (
      <div>
        <h2>ES5</h2>
        <Ex1a /><Ex1b /><Ex1c />
        <hr />
        <Ex2 />
        <Ex3 />
        <Ex4a /><Ex4b />
        <Ex5 />
        <hr />
        <h2>ES6</h2>
        <Ex6a /><Ex6b /><Ex6c />
        <Ex7 />
        <Ex8 />
        <Ex9 />
      </div>
    )
  }
}




ReactDOM.render(<Examples />, document.querySelector('#container'))


// // immediately invoke a function
// (function(){
//   // that creates a listener for window.onload
//   window.onload = function(){
//     // and otherwise hides the details of mounting React Components
//     var mountPoint = document.querySelector('#container')

//     if (mountPoint) {
//       ReactDOM.render(<Examples />, mountPoint)
//     }
//   }
// }())

