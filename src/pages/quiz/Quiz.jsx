<<<<<<< Updated upstream
import React from 'react';
import { Link } from 'react-router-dom';
=======
import React from 'react'
import { NavLink } from 'react-router-dom'
>>>>>>> Stashed changes

const Quiz = () => {
  return (
    <div>
<<<<<<< Updated upstream
      <h1>Quiz Module</h1>
      <Link to="/questions">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
};
=======
       <NavLink to={/dashboard/quiz/cartoon}>Cartoon Category</NavLink>
       <NavLink to={/dashboard/quiz/geography}>Geography Category</NavLink>
       <NavLink to={/dashboard/quiz/music}>Music Category</NavLink>
       <NavLink to={/dashboard/quiz/science}>Science Category</NavLink>
       <NavLink to={/dashboard/quiz/sport}>Sport Category</NavLink>
    </div>
  )
}
>>>>>>> Stashed changes

export default Quiz;
