import React, { Component } from 'react';
import logo from './logo.svg';
import TextInput from './components/text-input'
import './App.css';

class App extends Component {
  handleChange(e){
    console.log(e.target.value, e.target.name)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
            Learn React
            <TextInput 
              name={'search'} 
              onChange={this.handleChange}
              placeholder={'Link to the repo... '}
            />
        </header>
      </div>
    );
  }
}

export default App;
