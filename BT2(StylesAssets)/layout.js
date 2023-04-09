import React from "react";
import { useState } from "react";

export default function Layout(){
    //Khai báo state time với giá trị mặc định là 'Day'
    const [time, setTime] = useState('day');

    //Hàm xử lý sự kiện khi click vào button Night
    const handleNightClick = () => {
      setTime('night');
    };

    //Hàm xử lý sự kiện khi click vào button Day
    const handleDayClick = () => {
      setTime('day');
    };

    return (
        <div className="container">
          <button
          style={{
            border: '1px solid black',
            padding: '5px',
            margin: '5px',
          }}
          className="nightBtn" onClick={handleNightClick}>Night</button>
          <button
          style={{
            border: '1px solid black',
            padding: '5px',
            margin: '5px',
          }}
           className="dayBtn" onClick={handleDayClick}>Day</button>

          <div className="field"
            style={{
              width: '200px',
              height: '80px',
              backgroundColor: time === "day" ? "blue" : "black",
            }}
          ></div>
        </div>
      );
    }