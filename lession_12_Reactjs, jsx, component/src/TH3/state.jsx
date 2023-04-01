import React from "react";
import {useState} from 'react';

export default function State(){
    const [age, setAge] = useState(0);

    const onIncreaseAge = () => {
        setAge(age + 1);
    }
    return(
        <div className="container">
            <div>{age}</div>
            <button onClick={onIncreaseAge}>Up to 1</button>
        </div>
    )
}