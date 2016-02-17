import React from 'react'
import ReactDOM from 'react-dom'

export default class NewsHeader extends React.Component {
  render() {
    return (
      <div className="newsHeader">
        <Logo />
        <Title />
        <Navigation />
        <Login />
      </div>
    );
  }
};


/*
#componentkata

take a look at the next 5 components, they're all the same.

each one is written in a different style.

if you want to get better at recognizing these variations,
just repeat the same exercise for as many of these components as you like

*/

// name: Logo
// type: pure   [ pure | stateful | container ]



// ES5 function declaration
function Logo(){
  return <div className="newsHeader-logo">
    <a href="https://www.ycombinator.com"><img src="/img/y18.gif"/></a>
  </div>
}

// ES5 function expression
// var Logo = function(){
//   return <div className="newsHeader-logo">
//     <a href="https://www.ycombinator.com"><img src="/img/y18.gif"/></a>
//   </div>
// }

// ES5 using React.createClass
// var Logo = React.createClass({
//   render: function(){
//     return <div className="newsHeader-logo">
//       <a href="https://www.ycombinator.com"><img src="/img/y18.gif"/></a>
//     </div>
//   }
// })



// ES6 using arrow functions
// const Logo = () => {
//   return <div className="newsHeader-logo">
//     <a href="https://www.ycombinator.com"><img src="/img/y18.gif"/></a>
//   </div>
// }

// ES6 using React.createClass
// const Logo = React.createClass({
//   render(){
//     return <div className="newsHeader-logo">
//       <a href="https://www.ycombinator.com"><img src="/img/y18.gif"/></a>
//     </div>
//   }
// })

// ES6 using class syntax to extend React.Component
// class Logo extends React.Component {
//   render(){
//     return <div className="newsHeader-logo">
//       <a href="https://www.ycombinator.com"><img src="/img/y18.gif"/></a>
//     </div>
//   }
// }


const Title = () => {
  return <div className="newsHeader-title">
    <a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
  </div>
}

const Navigation = () => {
  var navLinks = [
    {id: 1,  name: 'new',       url: 'newest'      },
    {id: 2,  name: 'comments',  url: 'newcomments' },
    {id: 3,  name: 'show',      url: 'show'        },
    {id: 4,  name: 'ask',       url: 'ask'         },
    {id: 5,  name: 'jobs',      url: 'jobs'        },
    {id: 6,  name: 'submit',    url: 'submit'      },
  ];

  return (
    <div className="newsHeader-nav">
      {navLinks.map(function ({id, name, url}) {

        let linkUrl = 'https://news.ycombinator.com/' + url

        return (
          <a key={id} className="newsHeader-navLink newsHeader-textLink" href={linkUrl}>
            {name}
          </a>
        );
      })}
    </div>
  );
}

const Login = () => {
  return <div className="newsHeader-login">
    <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?whence=news">login</a>
  </div>
}
