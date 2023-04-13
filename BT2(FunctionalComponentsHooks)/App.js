import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setTime(new Date().toLocaleTimeString())
    }, 5000);

    return () => {
      clearTimeout(timeoutID);
    }
  }, [time]);

  return (
    <div>
      <p>The current time is {time}</p>
    </div>
  );
}

export default Clock;
