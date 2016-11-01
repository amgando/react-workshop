import React from 'react'
import ReactDOM from 'react-dom'

///////////////////////////////////////////////////////////////////////////////

// Now focusing on features of components, let's dig into why / when / how

///////////////////////////////////////////////////////////////////////////////

// - pure/stateless components
// - stateful components
// - container components
// - component lifecycle methods


// "pure" (or "stateless") components have no internal state
// but they can receive properties (props) from their owner (wherever they were mounted)

// as a function, you receive props as an argument
const Ex1a = (props) => {
  return <div>components receive props {props.message}</div>
}

// when using React.createClass, props are attached to 'this'
const Ex1b = React.createClass({
  render(){
    return <div>components receive props {this.props.message}</div>
  }
})

// when extending React.Component you have to call super() and pass props
class Ex1c extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return <div>components receive props {this.props.message}</div>
  }
}

// "stateful" components have some internal state that they manage

// when defining components as a function, you *can't* manage state (as of React 0.14)
const Ex2zzz = () => {
  // functions can't manage state, they're only good for pure components
}

// state requires an additional method: getInitialState()
//  ... it's like your default settings for the component
const Ex2a = React.createClass({
  getInitialState(){
    return {data: 'their own internal state'}
  }, // notice the comma here since we're inside an object literal

  render(){
    return <div>components can manage {this.state.data}</div>
  }
})

// when extending React.Component you have to call super() and pass props
class Ex2b extends React.Component {
  constructor(){
    super()
    this.state = {data: 'their own state'}
  }  // notice, no comma since we're inside a class definition

  render(){
    return <div>component can manage {this.state.data}</div>
  }
}


// but what makes state interesting is that it can change over time
const Ex3 = React.createClass({
  getInitialState(){
    return {clickCount: 0}
  },

  render(){
    let inc = () => this.setState({clickCount: this.state.clickCount + 1})

    return <div onClick={inc} style={{'backgroundColor': 'LightBlue'}}>
    components can track data like this: [{this.state.clickCount}] click anywhere in this blue box and watch the number grow
    </div>
  }
})


// the same thing can be automated using setInterval
const Ex4a = React.createClass({
  getInitialState(){
    return { count: 0 }
  },

  // we need other lifecycle methods now to place our timer code
  componentDidMount(){
    let inc = () => this.setState({count: this.state.count + 1})
    this.timerId = setInterval(inc, 1000)

    setTimeout(() => clearInterval(this.timerId), 5000)
  },

  // and to clear our timer code if the component ever leaves the page
  componentWillUnmount(){
    clearInterval(this.timerId)
  },

  render(){
    return <div>
    components can track data like this: [{this.state.count}] &lt;-- counts up to 5 (refresh the page if you missed it)
    </div>
  }
})


// shouldComponentUpdate() is a kind of "guard" method that can stop the component
// from refreshing depending on what it returns.  false: don't refresh.  default is true
// and you would use this to optimize the rendering of your component.
// look at the logs to see the arguments passed to this method
const Ex4b = React.createClass({
  getInitialState(){
    return {count: 0}
  },

  componentDidMount(){
    // increment the count every second
    this.timerId = setInterval(this.inc, 1000)
    // stop incrementing after 5 seconds
    setTimeout(() => clearInterval(this.timerId), 5000)
  },

  inc(){
    this.setState({count: this.state.count + 1})
  },

  componentWillUnmount(){
    clearInterval(this.timerId)
  },

  shouldComponentUpdate(){
    return false // this component never updates because this method returns false every time
  },

  render(){
    return <div>
    components can track data like this: [{this.state.count}] &lt;-- but this wont update
    </div>
  }
})



const Ex4c = React.createClass({
  getInitialState(){
    return { elapsedTime: 0 }
  },

  componentDidMount(){
    this.timerId = setInterval(this.updateTime, 100)
  },

  componentWillUnmount(){
    clearInterval(this.timerId)
  },

  updateTime(){
    // calculate time passed since 'start' in seconds
    let elapsedTime = (((new Date() - this.props.start)/1000) % 60).toFixed(1)

    this.setState({ elapsedTime })
  },

  shouldComponentUpdate(){
    let et = this.state.elapsedTime
    if(et >= 2 && et <= 4) return false // stop updating between 2 and 4 seconds

      return true
  },

  render(){
    return <div>
    components can track data like this: [{this.state.elapsedTime}]{' '}
    <button onClick={() => clearInterval(this.timerId)}>stop the timer</button>
    </div>
  }
});


const Ex5 = React.createClass({

  style: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-around',
    backgroundColor: 'lightgrey',
    border: '1px solid blue',
    padding: '10px',
    margin: '10px'
  },

  getInitialState(){
    return { focused: 0 }
  },

  clicked(index){
    this.setState({focused: index})
  },

  render() {
    // The map method will loop over the array of menu entries,
    // and will return a new array with <li> elements.
    let listItems = this.props.items.map((m, index) => {

      return <li key={index} onClick={this.clicked.bind(this, index)}>{m}</li>;
    })

    return (
      <div style={this.style}>
        click a list item and see its name appear below
        <ul>{ listItems }</ul>
        <p style={this.style}>{this.props.items[this.state.focused]}</p>
      </div>
    );
  }
});

const Ex6 = () => <CommentPanel />

const CommentPanel = React.createClass({
  getInitialState(){
    return {
      comments: ['hi', 'hey', 'ho']
    }
  },

  addComment(c){
    let comments = this.state.comments
    comments.push(c)

    this.setState({ comments }) // ES6 simplified object notation
  },

  render(){
    let comments = this.state.comments.map((c,idx) => {
      return <Comment key={idx} text={c} />
    })

    return <div>
      <h2>Comments</h2>
      <ul>{ comments }</ul>
      <CommentForm add={this.addComment} />
    </div>
  }
})

const Comment = (props) => <li>{props.text}</li>

const CommentForm = React.createClass({
  submit(e){
    e.preventDefault()

    let comment = this.refs.new_comment.value
    this.props.add(comment)
  },

  render(){
    return <form>
      <input type="text" ref="new_comment" />
      <input type="submit" onClick={this.submit}/>
    </form>
  }
})


// ... more on lifecycle methods
// ... fetching data from outside
// ... add 8 ways to communicate stuff here too
// "container" components wrap "pure" components and provide access to the external world

class Examples extends React.Component {
  render(){
    return <div>
      <Ex1a message="*from* their owner" />
      <Ex1b message="from *their* owner" />
      <Ex1c message="from their *owner*" />
      <hr />
      <Ex2a />
      <Ex2b />
      <hr />
      <Ex3 />
      <Ex4a /><Ex4b /><Ex4c start={Date.now()} />
      <hr />
      <Ex5 items={ ['Home', 'Services', 'About', 'Contact us'] } />
      <Ex6 />
    </div>
  }
}


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
