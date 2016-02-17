import React from 'react'
import ReactDOM from 'react-dom'

///////////////////////////////////////////////////////////////////////////////

// Now focusing on moving data around

///////////////////////////////////////////////////////////////////////////////


// 8 no-Flux strategies for React component communication
// http://andrewhfarmer.com/component-communication

// React AJAX Best Practices
// http://andrewhfarmer.com/react-ajax-best-practices

// AJAX/HTTP Library Comparison
// http://andrewhfarmer.com/ajax-libraries



// immediately invoke a function
(function(){
  // that creates a listener for window.onload
  window.onload = function(){
    // and otherwise hides the details of mounting React Components
    var mountPoint = document.querySelector('#container')

    if (mountPoint) {
      ReactDOM.render(<Examples />, mountPoint)
    }
  }
}())