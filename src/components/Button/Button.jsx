import React from "react";

import './Button.css'

const Button = (props) => {
    return (
        <button className="add-button" onClick={props.onClick} >Add</button>
    );
}


export default Button;