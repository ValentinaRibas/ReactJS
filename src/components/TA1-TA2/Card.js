import React from 'react';
import 'bulma/css/bulma.min.css';
import { Box } from 'react-bulma-components';

function Card(props){

    return(
        <Box style={{ width: 400, margin: 'auto' }}>
            <div>{props.children}</div>
        </Box>
    ) 
}

export default Card;