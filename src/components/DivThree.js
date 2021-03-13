import React, { Component } from 'react';

export class DivThree extends Component {
  render() {
    return (
      <div>
        <h3 onClick={() => this.props.changeText(this.props.tardisNumber)}>
          {this.props.tardis.name}
        </h3>
      </div>
    );
  }
}

export default DivThree;
