import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./question.css";

const Questions = () => {
  const [quizz, setQuizz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedAnswers, setClickedAnswers] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [timerRunning, setTimerRunning] = useState(false);
  const history = useHistory();

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

  const startTimer = () => {
    setTimerRunning(true);
    setTimeLeft(20);
    const timer = setTimeout(() => {
      handleNextQuestion();
    }, 20000);
    return () => clearTimeout(timer);
  };

  const handleNextQuestion = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= quizz.length ? 0 : prevIndex + 1
    );
    setClickedAnswers([]);
    setAnsweredCount((prevCount) => prevCount + 1);
    startTimer();
    if (answeredCount + 1 >= 5) {
      history.push("/congratulation");
    }
  };

  const handleAnswerClick = (answer) => {
    setClickedAnswers((prevClick) => [...prevClick, answer]);
    handleNextQuestion();
  };

  const shuffleAnswers = (answers, i = answers.length - 1) => {
    if (i === 0) return answers;

    const randomShuffledAnswers = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[randomShuffledAnswers]] = [
      answers[randomShuffledAnswers],
      answers[i],
    ];

    return shuffleAnswers(answers, i - 1);
  };

  if (!quizz.length) {
    return <div>Loading...</div>;
  }

  const post = quizz[currentIndex];
  const shuffledAnswers = shuffleAnswers([
    ...post.incorrect_answers,
    post.correct_answer,
  ]);

  return (
    <div id="main">
      <div className="quizz">
        <p>Time Left: {timeLeft} seconds</p>
        <p>
          Question {currentIndex + 1} of {quizz.length}
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
