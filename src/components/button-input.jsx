import React from 'react';
import { Button } from 'semantic-ui-react'

function ButtonInput(props){ 
    return( 
        <Button
            name={props.name} 
            onClick={(e)=>props.onClick(e)} 
            
        >
        {props.text}
        </Button>
    )
}
export default ButtonInput;
