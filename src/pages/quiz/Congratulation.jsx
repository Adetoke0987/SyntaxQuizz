import React from "react";

const Congratulation = ({ score }) => {
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
    message = "Not good enough";
  } else if (scorePercentage <= 60) {
    message = "Fair result";
  } else {
    message = "Great job";
  }

  return (
    <div>
      <h2>Congratulations!</h2>
      <p>Your score: {scorePercentage}%</p>
      <p style={messageStyle}>{message}</p>
    </div>
  );
};

export default Congratulation;
