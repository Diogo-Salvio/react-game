import React from "react";

import './Card.css'

const Card = (props) => {
    return (
        <div className="card-style">
            <h2>Tarefa</h2>
            <p>{props.text}</p>

        </div>
    );
}


export default Card;