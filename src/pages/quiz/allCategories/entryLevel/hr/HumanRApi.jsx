import React, { useState, useEffect } from 'react';
import './hr.css'; // Import CSS file for styling


function HumanRApi() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10); // Timer starts at 10 seconds
  const [selectedAnswers, setSelectedAnswers] = useState([]); // State to store selected answers
  const [isCorrect, setIsCorrect] = useState(null); // State to track if the selected answer is correct
  const [score, setScore] = useState(0); // State to store the score
  const [wrongAnswers, setWrongAnswers] = useState(0); // State to store the number of wrong answers

  useEffect(() => {
    fetch('https://questionsapi-1.onrender.com/api/quiz')
      .then(response => response.json())
      .then(data => {
        // Filter questions to get only those from the "Accounting" category
        const accountingQuestions = data.find(category => category.category === "Business Administrator");
        // Modify correctAnswer to store the index of the correct answer as a number
        const modifiedQuestions = accountingQuestions.questions.map(question => ({
          ...question,
          correctAnswer: question.options.findIndex((option, index) => index === question.correctAnswer)
        }));
        setQuestions(modifiedQuestions);
        // Initialize selected answers array with the same length as questions array, filled with nulls
        setSelectedAnswers(new Array(modifiedQuestions.length).fill(null));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        // Move to the next question if timer reaches 0
        handleNextQuestion();
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timer, questions]);

  const handleAnswerClick = (index) => {
    // Check if the selected answer is correct
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    const isCorrectAnswer = index === correctIndex;

    // Update selected answers array with the clicked answer
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(newSelectedAnswers);

    // Set isCorrect state to indicate if the answer is correct
    setIsCorrect(isCorrectAnswer);

    // Calculate score and wrong answers count after selecting an answer
    calculateScore(isCorrectAnswer);
    
    // Move to the next question immediately
    handleNextQuestion();
  };

  const calculateScore = (isCorrectAnswer) => {
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      } else if (selectedAnswers[index] !== null) {
        wrongAnswers++;
      }
    });

    // Increment the correct score if the answer is correct
    if (isCorrectAnswer) {
      correctAnswers++;
    }

    // Decrement the wrong score if the answer is not correct
    if (!isCorrectAnswer && selectedAnswers[currentQuestionIndex] !== null) {
      wrongAnswers--;
    }

    setScore(correctAnswers);
    setWrongAnswers(wrongAnswers);
  };

  const handleNextQuestion = () => {
    // Move to the next question if not the last question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(10); // Reset timer for the next question
    } else {
      // If it's the last question, calculate and set the score
      calculateScore();
      setCurrentQuestionIndex(questions.length); // Set index to show result
    }

    // Reset isCorrect state for the next question
    setIsCorrect(null);
  };

  if (currentQuestionIndex === questions.length) {
    // If the current question index is equal to the total number of questions, show result
    return <ResultComponent score={score} totalQuestions={questions.length} wrongAnswers={wrongAnswers} />;
  }

  return (
    <div className="app">
      <h1 className="title">Who Wants to Be an Accountant?</h1>
      <div className="instructions">
        <p>Answer the following questions correctly to win!</p>
        <p>You have {timer} seconds to answer each question.</p>
      </div>
      <div className="question-container">
        <div className="question">
          <h3>Question {currentQuestionIndex + 1}:</h3>
          <p>{questions[currentQuestionIndex]?.question}</p>
          <ul>
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <li 
                key={index}
                onClick={() => handleAnswerClick(index)} // Call handleAnswerClick when option is clicked
                className={`option ${selectedAnswers[currentQuestionIndex] === index ? "selected" : ""} ${isCorrect !== null && isCorrect === (index === questions[currentQuestionIndex].correctAnswer) ? (isCorrect ? "correct" : "incorrect") : ""}`} // Apply selected and correct/incorrect class
              >
                {option}
                {/* Display correct/incorrect text */}
                {isCorrect !== null && isCorrect === (index === questions[currentQuestionIndex].correctAnswer) ? <span className="feedback">{isCorrect ? "Correct!" : "Incorrect"}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HumanRApi;


 