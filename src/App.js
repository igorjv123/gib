import React, { Component } from 'react';
import TabsBar from './components/tabs-bar/tabsBar'
import Header from './components/header/header'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url:'',
      data:'',
      tabs:[true,false,false]
    }
  }
  
  
  handleChangeTab(tabs){
    this.setState({tabs:tabs}, ()=>console.log(this.state))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <div>
          <TabsBar onClick={this.handleChangeTab.bind(this)}/>
          {this.state.data.name}
          <br/>
          {this.state.data.description}
          
        </div>
      </div>
    );
  }
}

export default App;
