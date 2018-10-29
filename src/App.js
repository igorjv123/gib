import React, { Component } from 'react';
import TabsBar from './components/tabs-bar/tabsBar'
import TextInput from './components/text-input/textInput'
import Button from './components/button/buttonInput'
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
  
  handleChange(e){
    this.setState({url:e.target.value}, ()=>console.log(this.state))
  }
  handleSubmit = async(e)=>{
    const data = await this.getData(this.state.url)
    this.setState({data:data}, ()=> console.log(this.state))
  }
  handleChangeTab(tabs){
    this.setState({tabs:tabs}, ()=>console.log(this.state))
  }
  getData = async(url) => {
    let api_call = await fetch(url);
    const data = await api_call.json()
    return data
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-input">
            <TextInput 
              style={{float:'left',margin:'10px', width: '600px'}}
              name={'search'} 
              onChange={this.handleChange.bind(this)}
              placeholder={'Link to the repo... '}
            />
            <Button
              onClick={this.handleSubmit.bind(this)} 
            >
            Search
            </Button>
          </div>  
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
