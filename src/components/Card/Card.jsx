import React from "react";


import './Card.css'

const Card = (props) => {
    
    const excludeButton = () => {
        cardList.slice()
    }
    
    
    
    return (
        <div className="card-style">
            <button className="button" onClick={() => excludeButton()}>X</button>
            
            <input type='text' placeholder="Nome da Tarefa" className="input-tar"/>
           
            <textarea className="text-area" cols="100%">{props.text}</textarea>

        </div>
    );
}


export default Card;