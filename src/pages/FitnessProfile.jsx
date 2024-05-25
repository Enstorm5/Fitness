import React, { useState } from 'react';

const FitnessProfile = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [goals, setGoals] = useState('');
  const [activityLevel, setActivityLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Fitness Profile:', { age, gender, goals, activityLevel });
    // Here you would typically send this data to a backend API
  };

  return (
    <div>
      <h1>Set Up Your Fitness Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="goals">Fitness Goals:</label>
          <textarea
            id="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="activityLevel">Activity Level:</label>
          <select id="activityLevel" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} required>
            <option value="">Select...</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Lightly Active</option>
            <option value="moderate">Moderately Active</option>
            <option value="very">Very Active</option>
          </select>
        </div>
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default FitnessProfile;
