import React, { Component } from 'react'

export class App extends Component {
  constructor (){
    super()
    this.state= {
      tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
      }
    }
  }

  changeIt (text) {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h3 onClick={()=>this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
      </div>
    )
  }
}

export default App
