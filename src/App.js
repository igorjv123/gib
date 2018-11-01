import React, { Component } from 'react';
import TabsBar from './components/tabs-bar/tabsBar'
import Header from './components/header/header'
import './App.css';
import MainWrapper from './components/main-wrapper/mainWrapper';
import MainInfo from './components/main-info/mainInfo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div className='content'>
          <TabsBar/>
          <MainWrapper>
            <MainInfo/>
          </MainWrapper>
         
          
        </div>
      </div>
    );
  }
}

export default App;
