import React from "react";

import './Card.css'

const Card = (props) => {
    return (
        <div className="card-style">
            <input type='text' placeholder="Nome da Tarefa" className="input-tar"/>
            <textarea className="text-area" cols="100%">{props.text}</textarea>

        </div>
    );
}


export default Card;