import React from 'react';
import { useState } from 'react';
import style from "./styles.module.css";

export default function Epp(){
    const [numClicked, setNumClicked] = useState(0);
    const handleClick = () => {
        setNumClicked((current) => {
            return current = current + 1;
        })
    }
    const textStyle = ((numClicked % 2 === 0) ? style.textBlue : style.textRed)
    return (
        <div className='Epp'>
            <button onClick={handleClick}>Click here</button>
            <h2 className={textStyle}>You clicked {numClicked} times</h2>
        </div>
    )
}