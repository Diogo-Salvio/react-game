import React, { useState } from "react";

import Button from "../Button/Button"
import Input from "../input/Input"
import Card from "../Card/Card";

import './Main.css'

const Main = () => {

    const [description, setDescription] = useState();
    const [addDescription, setAddDescription] = useState();
    
    {console.log(addDescription)}

    return (
        <div className="main">


            <div className="First-section">
                <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button onClick={() => setAddDescription(description)} />
            </div>

            <div className="Second-section">
                <Card text={addDescription} />
            </div>

            
        </div>
    )
};


export default Main;