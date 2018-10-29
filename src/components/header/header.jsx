import React from 'react';
// import '../../style.css';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import TextInput from '../text-input/textInput'
import Button from '../button/buttonInput'

class Header extends React.Component{
    handleLinkChange(e){
        this.props.onTabChange(parseInt(e.target.name))
    }
    inputChange(e){
        this.props.linkChange(e.target.value)
    }
    handleSubmit = async(e)=>{
        this.props.searchClick(this.props.link)
        const data = await this.getData(this.props.link)
        this.setState({data:data}, ()=> console.log(this.state))
    }
    getData = async(url) => {
        let api_call = await fetch(url);
        const data = await api_call.json()
        return data
      }
     
    render(){
        return(
            <div className="App-input">
            <TextInput 
              style={{float:'left',margin:'10px', width: '600px'}}
              name={'search'} 
              onChange={this.inputChange.bind(this)}
              placeholder={'Link to the repo... '}
            />
            <Button
              onClick={this.handleSubmit.bind(this)} 
            >
            Search
            </Button>
          </div>  
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

