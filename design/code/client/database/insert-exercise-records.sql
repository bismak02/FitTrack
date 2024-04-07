/*

Need to generate exercises to be inserted into the exercise table

Exercises Table: Contains a list of exercises and their calorie burn rates.

ExerciseID (Primary Key)
Exercise
CaloriesBurnt (Calories burnt per 15 minutes at average intensity)

Example:

ExerciseID: 1
Exercise: Push-ups
CaloriesBurnt: 80

*/

INSERT INTO Exercises (ExerciseID, Exercise, CaloriesBurnt) VALUES
    (1, 'Push-ups', 80),
    (2, 'Sit-ups', 70),
    (3, 'Jumping Jacks', 100),
    (4, 'Running (6 mph)', 120),
    (5, 'Cycling (12-14 mph)', 110),
    (6, 'Swimming (moderate effort)', 150),
    (7, 'Walking (brisk pace)', 70),
    (8, 'Yoga', 50),
    (9, 'Rowing (moderate effort)', 130),
    (10, 'Dancing', 90);