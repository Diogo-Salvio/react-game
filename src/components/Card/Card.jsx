import React from "react";

import './Card.css'

const Card = (props) => {
    return (
        <div className="card-style">
            <input type='text' placeholder="Nome da Tarefa" className="input-tar"/>
            <p>{props.text}</p>

        </div>
    );
}


export default Card;