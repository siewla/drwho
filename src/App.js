import React, { Component } from 'react'
import DivOne from './components/DivOne'

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
        <DivOne tardis={this.state.tardis} changeIt={()=>this.changeIt(this.state.tardis.name)}/>
      </div>
    )
  }
}

export default App
