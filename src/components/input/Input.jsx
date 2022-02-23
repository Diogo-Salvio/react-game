import React from "react";

import './Input.css'

const Input = (props) => {
    return (
        <input  className="input-text" value={props.value} onChange={props.onChange} />
    );
}


export default Input;