import styled from 'styled-components'
import React, { Component } from 'react';
const Tab = styled.button`
    background: ${(props)=>props.active?'#fff':'#ccc'};
    border-radius: 3px 3px 0 0 ;
    border:none;
    width:30%;
    float:left;
    font-size:16px;
    color: ${(props)=>props.active?'#484848':'#282c34'};
    margin: ${(props)=>props.active?'15px 10px 10px 10px':'10px'};;
    padding: 8px;
    cursor:pointer;
    :hover {
        color: #fff;
        border-color: #fff;
      }
    :active{
        margin-top:8px;
    }

`
export default Tab;
