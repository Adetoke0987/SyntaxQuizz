
import React from 'react';

const UserProfile = ({ user }) => {
  // Check if user is defined before accessing properties
  if (!user) {
    return <div>Loading...</div>; // Handle case where user is not available yet
  }

  const { fullname, email, quizStats } = user;

  return (
    <div className="user-profile">
      <div className="profile-details">
        <h2>{fullname || 'Unknown'}</h2>
        <p>Email: {email || 'Unknown'}</p>
      </div>
      {quizStats && (
        <div className="quiz-stats">
          <h3>Quiz Statistics</h3>
          <p>Total quizzes taken: {quizStats.totalQuizzes || 0}</p>
          <p>Correct answers: {quizStats.correctAnswers || 0}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

