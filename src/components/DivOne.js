import React, { Component } from 'react';
import DivTwo from './DivTwo';

export class DivOne extends Component {
  render() {
    return (
      <div>
        <DivTwo changeText={this.props.changeText} tardis={this.props.tardis} />
      </div>
    );
  }
}

export default DivOne;
