import React from 'react';
import { useState } from 'react';

function TA3(){
    const [text, setText] = useState('');

    function handleText(event){
        setText(event.target.value);
    }

    return(
        <div>
            <input placeholder="Escriba aquí" type="text" onChange={handleText} value={text}>
            </input>
            <p>{text}</p>
        </div>
    )
}

export default TA3;