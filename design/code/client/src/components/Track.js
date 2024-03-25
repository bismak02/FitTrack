import React, { useState, useEffect } from 'react';

const FitnessTracker = () => {
  const [workout, setWorkout] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');
  const [weight, setWeight] = useState('');
  const [mood, setMood] = useState('');
  const [fitnessLogs, setFitnessLogs] = useState([]);

  const [food, setFood] = useState('');
  const [foodCalories, setFoodCalories] = useState('');
  const [nutritionLogs, setNutritionLogs] = useState([]);

  const foodList = [
    'Apple', 'Banana', 'Orange', 'Berries', 'Yogurt',
    'Chicken Breast', 'Broccoli', 'Almonds', 'Oatmeal', 'Eggs',
    'Brown Rice', 'Sweet Potato', 'Salmon', 'Avocado', 'Quinoa',
    'Spinach', 'Beef', 'Carrots', 'Milk', 'Whole Grain Bread'
  ];

  const workoutOptions = [
    'Running', 'Cycling', 'Swimming', 'Weightlifting', 'Yoga',
    'Pilates', 'HIIT', 'Dancing', 'Boxing', 'Jump Rope',
    'Rowing', 'Kickboxing', 'Circuit Training', 'Zumba', 'CrossFit',
    'Hiking', 'Skiing', 'Basketball', 'Soccer', 'Tennis'
  ];

  const workoutMoods = [
    'Energetic', 'Happy', 'Fulfilled', 'Relaxed', 'Stressed Relief',
    'Motivated', 'Refreshed', 'Accomplished', 'Excited', 'Satisfied'
  ];

  // Load logs from localStorage on component mount
  useEffect(() => {
    const savedFitnessLogs = JSON.parse(localStorage.getItem('fitnessLogs'));
    if (savedFitnessLogs) {
      setFitnessLogs(savedFitnessLogs);
    }

    const savedNutritionLogs = JSON.parse(localStorage.getItem('nutritionLogs'));
    if (savedNutritionLogs) {
      setNutritionLogs(savedNutritionLogs);
    }
  }, []);

  // Save logs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('fitnessLogs', JSON.stringify(fitnessLogs));
    localStorage.setItem('nutritionLogs', JSON.stringify(nutritionLogs));
  }, [fitnessLogs, nutritionLogs]);

  const handleAddFitnessLog = () => {
    const newLog = { date: new Date(), workout, duration, calories, weight, mood };
    setFitnessLogs([...fitnessLogs, newLog]);
    setWorkout('');
    setDuration('');
    setCalories('');
    setWeight('');
    setMood('');
  };

  const handleAddNutritionLog = () => {
    const newLog = { date: new Date(), food, calories: foodCalories };
    setNutritionLogs([...nutritionLogs, newLog]);
    setFood('');
    setFoodCalories('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1>Fitness Tracker</h1>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
          <select value={workout} onChange={(e) => setWorkout(e.target.value)} style={{ padding: '10px', width: '220px' }}>
            <option value="">Select Workout</option>
            {workoutOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration (minutes)" style={{ padding: '10px', width: '200px' }} />
          <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calories Burned" style={{ padding: '10px', width: '200px' }} />
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (kg/lbs)" style={{ padding: '10px', width: '200px' }} />
          <select value={mood} onChange={(e) => setMood(e.target.value)} style={{ padding: '10px', width: '220px' }}>
            <option value="">Select Workout Mood</option>
            {workoutMoods.map(mood => (
              <option key={mood} value={mood}>{mood}</option>
            ))}
          </select>
          <button onClick={handleAddFitnessLog} style={{ padding: '10px', width: '200px', background: '#123A6D', color: '#fff' }}>Add Fitness Log</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2>Fitness Logs</h2>
          {fitnessLogs.length > 0 ? fitnessLogs.map((log, index) => (
            <div key={index} style={{ background: '#f3f3f3', margin: '10px 0', padding: '10px', borderRadius: '8px' }}>
              <p>Date: {log.date.toLocaleString()}</p>
              <p>Workout: {log.workout}</p>
              <p>Duration: {log.duration} minutes</p>
              <p>Calories Burned: {log.calories}</p>
              <p>Weight: {log.weight}</p>
              <p>Mood: {log.mood}</p>
            </div>
          )) : <p>No fitness logs to display.</p>}
        </div>
      </div>

      
      <div style={{ marginBottom: '40px' }}>
        <h1>Nutrition Tracker</h1>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
          <select value={food} onChange={(e) => setFood(e.target.value)} style={{ padding: '10px', width: '220px' }}>
            <option value="">Select Food Item</option>
            {foodList.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          <input type="number" value={foodCalories} onChange={(e) => setFoodCalories(e.target.value)} placeholder="Calories" style={{ padding: '10px', width: '180px' }} />
          <button onClick={handleAddNutritionLog} style={{ padding: '10px', width: '200px', background: '#123A6D', color: '#fff', border: 'none', borderRadius: '5px' }}>Add Nutrition Log</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2>Nutrition Logs</h2>
          {nutritionLogs.length > 0 ? nutritionLogs.map((log, index) => (
            <div key={index} style={{ background: '#f3f3f3', margin: '10px 0', padding: '10px', borderRadius: '8px' }}>
              <p>Date: {log.date.toLocaleString()}</p>
              <p>Food: {log.food}</p>
              <p>Calories: {log.calories}</p>
            </div>
          )) : <p>No nutrition logs to display.</p>}
        </div>
      </div>
    </div>
  );
};

export default FitnessTracker;
