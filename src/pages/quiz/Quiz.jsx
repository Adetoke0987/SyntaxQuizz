

import { NavLink } from 'react-router-dom'
import "./Quiz.css";
import { useState } from 'react';

const Quiz = () => {

  const [pop, setPop] = useState(false);

  const popHandler = () => {
    setPop(!pop)
  }
  

  return (
    <div className= 'categories-body' >
      <div className= 'allQuiz'>
        <div className= 'cartoon quizBox' onClick={popHandler}>
          <h3 id='title'>Cartoon Category</h3>
        </div>
        <div className= 'geography quizBox' onClick={popHandler}>
          <h3 id='title'>Geography Category</h3>
        </div>
        <div className= 'music quizBox' onClick={popHandler}>
          <h3 id='title'>Music Category</h3>
        </div>
        <div className= 'science quizBox' onClick={popHandler}>
          <h3 id='title'>Science Category</h3>
        </div>
        <div className= 'sport quizBox' onClick={popHandler}>
          <h3 id='title'>Sport Category</h3>
        </div>
      </div>
      {pop && (
        <div className= 'pop'>
            <div className= "popButtons">
                <div className= "pop__controls">
                   <button className= "pop__close"type="button"onClick={popHandler}>Ⅹ</button>
                </div>
                <div className= "allButtons">
                     <NavLink to="/questions" id='btn'><p id='p'>Easy</p></NavLink>
                     <NavLink to="/questions" id='btn'><p id='p'>Medium</p></NavLink>
                     <NavLink to="/questions" id='btn'><p id='p'>Hard</p></NavLink>
                     
                </div>
            </div>
        </div>
      )}

    </div>
  )
}

export default Quiz;












