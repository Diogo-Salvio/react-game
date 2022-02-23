import React from "react";

import Button from "../Button/Button"
import Input from "../input/Input"
import Card from "../Card/Card";

import './Main.css'

const Main = () => {
    return (
        <div className="main">
            
            
            <div className="First-section">
                <Input />
                <Button />
            </div>
            
            <div className="Second-section">
                <Card />
            </div>
            

        </div>
    )
};


export default Main;