

import { NavLink } from 'react-router-dom'
import "./Quiz.css";
import { useState } from 'react';

const Quiz = () => {

  const [pop, setPop] = useState(false);

  const popHandler = () => {
    setPop(!pop)
  }


  return (
    <div className= 'categorie_-body' >
      <div className= 'allQuiz'>
        <div className= 'cartoon quizBox' onClick={popHandler}>
          <h3 id='title'>Cartoon Category</h3>
        </div>
        {pop && (
          <div className='pop'>
            <div className="popButtons">
              <div className="pop__controls">
                <button className="pop__close" type="button" onClick={popHandler}>Ⅹ</button>
              </div>
              <div className="allButtons">
                <NavLink to="/questions" id='btn'><p id='p'>Easy</p></NavLink>
                <NavLink to="/questions" id='btn'><p id='p'>Medium</p></NavLink>
                <NavLink to="/questions" id='btn'><p id='p'>Hard</p></NavLink>

              </div>
            </div>
          </div>
        )}

      </div>
        <div className='categories-body2' >
          <h2 id='pl'>Proffessional Level</h2>
        <div className='allQuiz2'>
          <div className='project quizBox' onClick={popHandler}>
            <h3 id='title'>Project Management</h3>
          </div>
          <div className='ict quizBox' onClick={popHandler}>
            <h3 id='title'>Information Technology</h3>
          </div>
          <div className='acct quizBox' onClick={popHandler}>
            <h3 id='title'>Accounting</h3>
          </div>
          <div className='logic quizBox' onClick={popHandler}>
            <h3 id='title'>Logistics</h3>
          </div>
          <div className='hr quizBox' onClick={popHandler}>
            <h3 id='title'>Human Resourse</h3>
          </div>
          <div className='ba quizBox' onClick={popHandler}>
            <h3 id='title'>Business Adminstration</h3>
          </div>
          <div className='mkt quizBox' onClick={popHandler}>
            <h3 id='title'>Marketing</h3>
          </div>
          <div className='add quizBox' onClick={popHandler}>
            <h3 id='titleA'>+</h3>
          </div>
        </div>
        {pop && (
          <div className='pop'>
            <div className="popButtons">
              <div className="pop__controls">
                <button className="pop__close" type="button" onClick={popHandler}>Ⅹ</button>
              </div>
              <div className="allButtons">
                <NavLink to="/questions" id='btn'><p id='p'>Easy</p></NavLink>
                <NavLink to="/questions" id='btn'><p id='p'>Medium</p></NavLink>
                <NavLink to="/questions" id='btn'><p id='p'>Hard</p></NavLink>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Quiz;












