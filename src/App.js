import React, { Component } from 'react';
import DivOne from './components/DivOne';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: {
        tardis1: {
          name: 'Time and Relative Dimension in Space',
          caps: false,
        },
        tardis2: {
          name: 'Time and Relative Dimension in Space',
          caps: false,
        },
      },
    };
  }
  changeIt = (tardisNumber) => {
    const tardis = this.state.tardis;
    if (this.state.tardis[tardisNumber].caps) {
      tardis[tardisNumber].name = tardis[tardisNumber].name.toLowerCase();
      tardis[tardisNumber].caps = false;
      this.setState({
        tardis: tardis,
      });
    } else {
      tardis[tardisNumber].name = tardis[tardisNumber].name.toUpperCase();
      tardis[tardisNumber].caps = true;
      this.setState({
        tardis: tardis,
      });
    }
  };
  render() {
    return (
      <div>
        <DivOne changeText={this.changeIt} tardis={this.state.tardis} />
      </div>
    );
  }
}

export default App;
