import React, { Component } from 'react';

// comps
import Header from './Components/header'

// style
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
      </div>
    );
  }
}

export default App;
