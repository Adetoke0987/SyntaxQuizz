// import React from "react"
import './question.css';
// // import './Home.css'; 


// const Questions =()=>{
//     return(
//         <>
//             <div id="main">
//                 <div id="question">
//                     {/* <h1>{Questions.category}</h1> */}
//                     <h3>Please pick correctly</h3>
//                     <p>who is presdent of nigeria</p>
                    
//                     <div id="answers">
//                         <span id="ans">option a</span>
//                         <span id="ans">option b</span>
//                         <span id="ans">option c</span>
//                         <span id="ans">option d</span>
//                     </div>


//                 </div>
//             </div>
//         </>
//     )
// }


// export default Questions 

import { useEffect, useState } from "react";


const Questions = () => {
  const [quizz, setQuizz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ setClickedAnswers] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then(data => {
        setQuizz(data.results);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex)=>(prevIndex+1 >= quizz.length)? 0 :(prevIndex+1));
    setClickedAnswers([]);
  };

  const handleAnswerClick = (answer)=>{
    setClickedAnswers(prevClick=>[...prevClick, answer])
  }

  // Shuffle the answers array
  const shuffleAnswers = (answers, i = answers.length - 1) => {
    if (i === 0) return answers;

    const ramdomShuffledAnswers = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[ramdomShuffledAnswers]] = [answers[ramdomShuffledAnswers], answers[i]];

     return shuffleAnswers(answers, i - 1);
  
};

  if (!quizz.length) {
    return <div>Loading...</div>;
  }

  const post = quizz[currentIndex];
  const shuffledAnswers = shuffleAnswers([...post.incorrect_answers, post.correct_answer]);

  return (
    <div id="main">
      <div className= "quizz">
        <h2>Category</h2>
        <h3 className= 'users'>{post.question}</h3>
        <div id="answers">
          {shuffledAnswers.map((answer, index) => (
            <span id="ans"key={index} onClick={handleAnswerClick}>{answer}</span>
          ))}
        </div>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Questions;