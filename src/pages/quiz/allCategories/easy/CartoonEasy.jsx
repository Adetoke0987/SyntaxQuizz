import React, { useEffect, useState } from "react";

const Cartoon = () => {
  const [quiz, setQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedAnswers, setClickedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10); // Initial time left for each question

  useEffect(() => {
    // Function to fetch quiz data
    const fetchQuizData = async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setQuiz(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchQuizData();
  }, []);

  useEffect(() => {
    // Countdown timer effect
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      // Cleanup function to clear timer on component unmount or question change
      return () => clearTimeout(timer);
    } else {
      // Time's up, move to next question
      handleNextClick();
    }
  }, [timeLeft, currentIndex]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= quiz.length ? 0 : prevIndex + 1));
    setClickedAnswers([]);
    setTimeLeft(10); // Reset timer for the next question
  };

  const handleAnswerClick = (answer) => {
    setClickedAnswers((prevClicked) => [...prevClicked, answer]);
    // Reset timer when an answer is clicked
    setTimeLeft(10);
  };

  const shuffleAnswers = (answers) => {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  };

  if (!quiz.length) {
    return <div>Loading...</div>;
  }

  const currentQuestion = quiz[currentIndex];
  const shuffledAnswers = shuffleAnswers([
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ]);

  return (
    <div className="quiz-container">
      <div className="quiz">
        <h2>Category: {currentQuestion.category}</h2>
        <h3>{currentQuestion.question}</h3>
        <p>Time left: {timeLeft} seconds</p>
        <ol>
          {shuffledAnswers.map((answer, index) => (
            <li key={index} onClick={() => handleAnswerClick(answer)}>
              {answer}
            </li>
          ))}
        </ol>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Cartoon;
