import React from 'react';
import Tab from './tab';
import './style.css';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class TabsBar extends React.Component{
    handleTabClick(e){
        this.props.onTabChange(parseInt(e.target.name))
    }
    render(){
    return(
        <div className='tab-bar'>
            <Tab
                name = {0}
                active={this.props.index === 0}
                onClick = {this.handleTabClick.bind(this)}
            >
            Main
            </Tab>

            <Tab
                name = {1}
                active={this.props.index === 1}
                onClick = {this.handleTabClick.bind(this)}
            >
            Graphics
            </Tab>

            <Tab
                name = {2}
                active={this.props.index === 2}
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

