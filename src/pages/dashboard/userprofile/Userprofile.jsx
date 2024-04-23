import React from "react";
import "./userprofile.css";

const UserProfile = ({ user }) => {
  // Check if user is defined before accessing properties
  if (!user) {
    return <div>Loading...</div>;
  }

  const { fullname, email, imageUrl, quizStats } = user;

  return (
    <div className="user-profile">
      {/* Display user image if available */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${fullname}'s profile picture`}
          className="profile-image"
        />
      )}
      <div className="profile-details">
        <h2>{fullname || "Unknown"}</h2>
        <p>Email: {email || "Unknown"}</p>
      </div>
      {quizStats && (
        <div className="quiz-stats">
          <h3>Quiz Statistics</h3>
          <p>Total quizzes taken: {quizStats.totalQuizzes || 0}</p>
          <p>Correct answers: {quizStats.correctAnswers || 0}</p>
          {/* Add more stats as needed */}
          {quizStats.averageScore && (
            <p>Average Score: {quizStats.averageScore.toFixed(1) || 0}%</p>
          )}
          {quizStats.highestScore && (
            <p>Highest Score: {quizStats.highestScore || 0}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
