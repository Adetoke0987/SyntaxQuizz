import React, { useState, useEffect } from 'react';

function Timer({ timeLimit, onTimeExpired }) {
  const [seconds, setSeconds] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(timer);
        onTimeExpired();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, onTimeExpired]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:{remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </div>
  );
}

export default Timer;
