import React from 'react';
import { Input } from 'semantic-ui-react'

function TextInput(props){ 
    return( 
    <Input 
        name={props.name} 
        onChange={(e)=>props.onChange(e)} 
        placeholder={props.placeholder}
        />
    )
}
export default TextInput;
