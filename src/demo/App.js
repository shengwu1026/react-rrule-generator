import React, { Component } from 'react';
import ReactRRuleGenerator from '../lib';
import './index.css';

class App extends Component {
  state = {
    rrule: 'FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1',
  };

  handleChange = (newRRule) => {
    this.setState({ rrule: newRRule });
  };

  render() {
    return (
      <div className="app container">
        <ReactRRuleGenerator
          onChange={this.handleChange}
          value={this.state.rrule}
        />
      </div>
    );
  }
}

export default App;
