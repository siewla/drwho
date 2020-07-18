import React, { Component } from 'react'

export class DivThree extends Component {
    render() {
        // console.log(this.props.tardis)
        // console.log((this.props.changeIt))
        return (
            <div>
                <h3 onClick={()=>this.props.changeIt(this.props.tardis.name)}>{this.props.tardis.name}</h3>
            </div>
        )
    }
}

export default DivThree
