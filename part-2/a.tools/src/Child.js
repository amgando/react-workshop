import React from 'react'
import ReactDOM from 'react-dom'

export default class Child extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return <pre>hello from *{this.props.name}* child component</pre>
  }
}
