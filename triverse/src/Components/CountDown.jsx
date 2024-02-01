import React, { useState, useEffect } from 'react';

const CountDown = () => {
  
  const targetDate = new Date('2024-03-15T23:59:59');

  // Calculate the initial time difference
  const calculateTimeDifference = () => {
    const now = new Date();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // State variables for the countdown values
  const [countdown, setCountdown] = useState(calculateTimeDifference);

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setCountdown(calculateTimeDifference);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); 

  return (
    <>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
        <div className="flex flex-col p-2  rounded-box  bg-black text-yellow-400">
          <span className="countdown font-mono text-5xl bg-black">
            <span style={{ '--value': countdown.days }}></span>
          </span>
          days
        </div>
       <div className="flex flex-col p-2  rounded-box  bg-black text-yellow-400">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': countdown.hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2  rounded-box  bg-black text-yellow-400">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': countdown.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2  rounded-box  bg-black text-yellow-400">
          <span className="countdown font-mono text-5xl">
            <span style={{ '--value': countdown.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    </>
  );
};

export default CountDown;
