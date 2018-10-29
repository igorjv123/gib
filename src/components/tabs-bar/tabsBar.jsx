import React from 'react';
import Tab from './tab';
import './style.css';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class TabsBar extends React.Component{
    handleTabClick(e){
        var temp = [false,false,false]
        temp[e.target.name] = true
        this.props.onTabChange(temp)
    }
    render(){
        console.log(this.props)
        return(
        <div className='tab-bar'>
            <Tab
                name = {0}
                // active={this.props.tabs[0]}
                onClick = {this.handleTabClick.bind(this)}
            >
            Main
            </Tab>

            <Tab
                name = {1}
                // active={this.props.tabs[1]}
                onClick = {this.handleTabClick.bind(this)}
            >
            Graphics
            </Tab>

            <Tab
                name = {2}
                
                // active={this.props.tabs[2]}
                onClick = {this.handleTabClick.bind(this)}
            >
            Add
            </Tab>
        </div>
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabsBar);

