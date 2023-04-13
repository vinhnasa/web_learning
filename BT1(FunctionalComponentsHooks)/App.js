import React, { useState } from 'react';

function Example() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(0);
    const [multiply, setMultiply] = useState(0);

    const handleOnClickSum = () => {
        setSum(number1 + number2);
    }

    const handleOnClickMultiply = () => {
        setMultiply(number1 * number2);
    }

    return (
        <div>
            <input type="number" onChange={(e) => setNumber1(parseInt(e.target.value))} />
            <input type="number" onChange={(e) => setNumber2(parseInt(e.target.value))} />
            <button onClick={handleOnClickSum}>Tính tổng</button>
            <button onClick={handleOnClickMultiply}>Tính tích</button>
            <div>Tổng: {sum}</div>
            <div>Tích: {multiply}</div>
        </div>
    );
}

export default Example;
