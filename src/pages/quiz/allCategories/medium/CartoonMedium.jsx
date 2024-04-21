import { useEffect, useState } from "react";


const Cartoon = () => {
  const [quizz, setQuizz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [setClickedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10)

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

  useEffect(() => {
    // Countdown timer effect
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextClick();
    }

  }, [timeLeft, currentIndex]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= quizz.length) ? 0 : (prevIndex + 1));
    setClickedAnswers([]);
    setTimeLeft(10);
  };

  const handleAnswerClick = (answer) => {
    setClickedAnswers(prevClick => [...prevClick, answer])
    setTimeLeft(10);
  }

  // Shuffle the answers array
  const shuffleAnswers = (answers, i = answers.length - 1) => {
    if (i === 0) return answers;

    // const ramdomShuffledAnswers = Math.floor(Math.random() * (i + 1));
    // [answers[i], answers[ramdomShuffledAnswers]] = [answers[ramdomShuffledAnswers], answers[i]];
    const randomShuffledIndex = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[randomShuffledIndex]] = [answers[randomShuffledIndex], answers[i]];


    return shuffleAnswers(answers, i - 1);

  };

  if (!quizz.length) {
    return <div>Loading...</div>;
  }

  const post = quizz[currentIndex];
  const shuffledAnswers = shuffleAnswers([...post.incorrect_answers, post.correct_answer]);

  return (
    <div className="quizz-container">
      <div className="quizz">
        <h2>Category:{post.question}</h2>
        <h3 className='users'>{post.question}</h3>
        <ol>
          {shuffledAnswers.map((answer, index) => (
            <li key={index} onClick={() => handleAnswerClick(answer)}>{answer}</li>
          ))}
        </ol>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Cartoon;