import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import "./question.css";
import "./question.module.css";

const Questions = () => {
  const [quizz, setQuizz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedAnswers, setClickedAnswers] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [timerRunning, setTimerRunning] = useState(false);
  // const history = useHistory();

  const [intervalId, setIntervalId] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setQuizz(data.results);
        setShuffledAnswers(shuffleAnswers(data.results[currentIndex]));
        startTimer();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (timerRunning && timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timerRunning, timeLeft]);

  useEffect(() => {
    if (answeredCount + 1 >= 5) {
      // Calculate the score based on the number of correct answers
      const correctAnswers = quizz.filter((question, index) => {
        return clickedAnswers[index] === question.correct_answer;
      }).length;
      const score = (correctAnswers / 5) * 100; // Assuming there are 5 questions

      // Redirect to the Congratulation component with the calculated score
      window.location.href = `/dashboard/congratulation?score=${score}`;
    }
  }, [answeredCount, quizz, clickedAnswers]);

  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      setTimeLeft(20);
      const id = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(id);
            handleNextQuestion();
            return 20;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleNextQuestion = () => {
    clearInterval(intervalId);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= quizz.length ? 0 : prevIndex + 1
    );
    setClickedAnswers([]);
    setAnsweredCount((prevCount) => prevCount + 1);
    setShuffledAnswers(shuffleAnswers(quizz[currentIndex + 1]));
    startTimer();
  };

  const handleAnswerClick = (answer) => {
    setClickedAnswers((prevClick) => [...prevClick, answer]);
    handleNextQuestion();
  };

  const shuffleAnswers = (question) => {
    const answers = [...question.incorrect_answers, question.correct_answer];
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  };

  if (!quizz.length) {
    return <div>Loading...</div>;
  }

  const post = quizz[currentIndex];

  return (
    <div id="main">
      <div className="quizz">
        <p>Time Left: {timeLeft} seconds</p>
        <p>
          Question {currentIndex + 1} of {quizz.length - 5}
        </p>
        <p>Questions Answered: {answeredCount}</p>
        <h2>Category</h2>
        <h3 className="quest">{post.question}</h3>
        <div id="answers">
          {shuffledAnswers.map((answer, index) => (
            <span key={index} onClick={() => handleAnswerClick(answer)}>
              {answer}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
