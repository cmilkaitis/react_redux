import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component {
     state = {
      ninjas : [
        { name: "Chris", age: 32, belt: "black", id: 1},
        { name: "Derek", age: 32, belt: "brown", id: 2},
        { name: "Joe", age: 33, belt: "yellow", id: 3},
        { name: "Dave", age: 34, belt: "red", id: 4}
      ]
    }
  render() {
    return (
      <div className="App">
        <h1>Set up react app</h1>
        <p>render components</p>
        <Ninjas ninjas={ this.state.ninjas }/>
      </div>
    );
  }
}

export default App;
