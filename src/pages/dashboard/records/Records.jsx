import React, { useState, useEffect } from 'react';

const Records = () => {
  // State variable to store quiz records
  const [quizRecords, setQuizRecords] = useState([]);

  // Function to fetch quiz records from an API
  const fetchQuizRecords = () => {
    // Perform fetch request to get quiz records
    // Example API endpoint: 'https://example.com/api/quiz-records'
    fetch('API_ENDPOINT_HERE')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch quiz records');
        }
        return response.json();
      })
      .then(data => {
        // Update state with fetched quiz records
        setQuizRecords(data);
      })
      .catch(error => {
        console.error('Error fetching quiz records:', error);
      });
  };

  // useEffect hook to fetch quiz records when component mounts
  useEffect(() => {
    fetchQuizRecords();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="records-container">
      <h2>Quiz Records</h2>
      <ul>
        {/* Map through quizRecords array and display each record */}
        {quizRecords.map((record, index) => (
          <li key={index}>
            {/* Display record details, such as user's name, score, date, etc. */}
            <p>User: {record.user}</p>
            <p>Score: {record.score}</p>
            <p>Date: {record.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Records;
