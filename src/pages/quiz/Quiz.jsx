import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <div>
      <h1>Quiz Module</h1>
      <Link to="/questions">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Quiz;
