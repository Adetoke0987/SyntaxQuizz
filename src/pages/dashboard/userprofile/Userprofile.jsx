import React from "react";
import "./userprofile.css";

const UserProfile = ({ user }) => {
  // Check if user is defined before accessing properties
  if (!user) {
    return <div>Loading...</div>;
  }

  const { firstName, lastName, email} = user;

  // Get the first letter of the first name and last name
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  return (
    <div className="user-profile">
      {/* Display user initials as a placeholder image */}
      <div className="profile-initials">{initials}</div>
      <div className="profile-details">
        <h2>{`${firstName} ${lastName}` || "Unknown"}</h2>
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
