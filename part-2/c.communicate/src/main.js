import React from 'react'
import ReactDOM from 'react-dom'

import Props from './Props'

class Communication extends React.Component {
  render(){
    return <div>
      <Props p1="here" p2="we" p3="are" />
    </div>
  }
}

ReactDOM.render(<Communication />, document.querySelector('#container'))