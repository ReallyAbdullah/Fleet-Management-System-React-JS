import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
