import React from 'react';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import './style.css'
class MainInfo extends React.Component{
    render(){
        console.log(this.props)
        const {mainInfo} = this.props;
        return(
          <div>
            {mainInfo?
                <div> 
                    <h1>{mainInfo.name}</h1>
                    <h2>{mainInfo.description}</h2>
                    <img alt='AVATAR' src = {mainInfo.owner.avatar_url}/>
                </div> 
            : 
                'Hello'
            }
          </div>  
        )
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainInfo);

