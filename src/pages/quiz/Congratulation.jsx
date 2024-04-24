import React from "react";
import { useLocation } from "react-router-dom";

const Congratulation = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = parseFloat(searchParams.get("score"));

  // Ensure score is a valid number
  if (typeof score !== 'number' || isNaN(score)) {
    return <div>Invalid score</div>;
  }

  // Calculate the score percentage
  const scorePercentage = (score / 5) * 100;

  // Define styles based on score range
  let messageStyle;
  if (scorePercentage <= 40) {
    messageStyle = { color: 'red' };
  } else if (scorePercentage <= 60) {
    messageStyle = { color: 'blue' };
  } else {
    messageStyle = { color: 'green' };
  }

  // Define the message based on score range
  let message;
  if (scorePercentage <= 40) {
    message = "You did well, try again";
  } else if (scorePercentage <= 60) {
    message = "Fair result";
  } else {
    message = "Great job, keep it up";
  }

  return (
    <div>
      <h2>Score</h2>
      <p>Your score: {scorePercentage}%</p>
      <p style={messageStyle}>{message}</p>
    </div>
  );
};

export default Congratulation;
