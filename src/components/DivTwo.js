import React, { Component } from 'react';
import DivThree from './DivThree';

export class DivTwo extends Component {
  render() {
    return (
      <div>
        <DivThree
          changeText={this.props.changeText}
          tardis={this.props.tardis.tardis1}
          tardisNumber='tardis1'
        />
        <DivThree
          changeText={this.props.changeText}
          tardis={this.props.tardis.tardis2}
          tardisNumber='tardis2'
        />
      </div>
    );
  }
}

export default DivTwo;
