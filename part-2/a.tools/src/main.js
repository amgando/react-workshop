import React from 'react'
import ReactDOM from 'react-dom'

import Child from './Child'

const MyComponent = () => {
  return <div>
    <h2>Hello World</h2>
    <Child name="first" />
    <Child name="second" />
    <Child name="third" />
  </div>
}

ReactDOM.render(<MyComponent />, document.querySelector('#container'))
