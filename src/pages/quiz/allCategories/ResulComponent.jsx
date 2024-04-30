// ResultComponent.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './ResultComponent.css'; // Import CSS file for styling

function ResultComponent({ score, totalQuestions, wrongAnswers }) {
  const correctAnswers = score - wrongAnswers; // Calculate the number of correct answers

  return (
    <div className="result-container">
      <h2 className="result-title">Quiz Completed!</h2>
      {/* <p className="result-score">Your Score: <span className="score">{correctAnswers}</span>/{totalQuestions}</p> */}
      {/* <p className="result-wrong-answers">Wrong Answers: <span className="wrong">{wrongAnswers}</span></p> */}
      <p className="result-message">Thank you for playing!</p>
      <Link to="/dashboard">
        <button className="back-button">Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default ResultComponent;

