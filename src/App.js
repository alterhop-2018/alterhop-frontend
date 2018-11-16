import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/normalize.css/normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App bp3-dark">
        <Search />
      </div>
    );
  }
}

export default App;
