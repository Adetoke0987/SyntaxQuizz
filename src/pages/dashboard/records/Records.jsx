import React, { useState } from 'react';


const Records = () => {

    const [score, setScore] = useState(0);

    const saveScore = () => {
 
      console.log("Score saved:", score);
    };
  
    return (
      <div>
        <h2>Record Score</h2>
        <p>Your current score: {score}</p>
        <button onClick={() => setScore(score + 1)}>Increment Score</button>
        <button onClick={saveScore}>Save Score</button>
      </div>
    );
  };
  
  export default Records;
  