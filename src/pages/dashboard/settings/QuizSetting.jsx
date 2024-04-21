import React, { useState } from 'react';
import './css/quizsettings.css'

const QuizSettings = () => {
  // State variables for quiz settings
  const [categoryPreferences, setCategoryPreferences] = useState([]);
  const [difficultyLevel, setDifficultyLevel] = useState('easy');

  // Handle category selection (assuming checkboxes or a selection list)
  const handleCategoryChange = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      setCategoryPreferences([...categoryPreferences, value]); // Add selected category
    } else {
      setCategoryPreferences(categoryPreferences.filter((cat) => cat !== value)); // Remove deselected category
    }
  };

  // Handle difficulty level change (assuming a dropdown or radio buttons)
  const handleDifficultyChange = (event) => {
    setDifficultyLevel(event.target.value);
  };

  return (
    <div className="quiz-settings">
      <h2>Quiz Settings</h2>
      <form>
        <h3>Category Preferences</h3>
        <div className="category-options">
          {/* Replace with your available categories and checkbox/select logic */}
          <label>
            <input
              type="checkbox"
              value="Science"
              checked={categoryPreferences.includes('Science')}
              onChange={handleCategoryChange}
            />
            Science
          </label>
          <label>
            <input
              type="checkbox"
              value="History"
              checked={categoryPreferences.includes('History')}
              onChange={handleCategoryChange}
            />
            History
          </label>
          {/* Add more category options as needed */}
        </div>
        <h3>Difficulty Level</h3>
        <select value={difficultyLevel} onChange={handleDifficultyChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default QuizSettings;
