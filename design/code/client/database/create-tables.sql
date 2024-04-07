/*
TABLES TO BE CREATED

User Table: This table holds all user-related information.

UserID (Primary Key)
FullName
Username
Email
Password

Exercise-Log Table: Here, we log the exercises performed by each user.

ExerciseLogID (Primary Key)
UserID (Foreign Key)
IntensityID (Foreign Key)
ExerciseID (Foreign Key)
Duration (In minutes)
Date

Intensity Table: This table defines the intensity levels for exercises.

IntensityID (Primary Key)
Intensity (e.g., Low, Medium, High)
BurnMultiplier

Exercises Table: Contains a list of exercises and their calorie burn rates.

ExerciseID (Primary Key)
Exercise
CaloriesBurnt (Calories burnt per minute)

Nutrition-Log Table: This table records the food items consumed by the user.

NutritionLogID (Primary Key)
UserID (Foreign Key)
FoodID (Foreign Key)
Quantity
Date
Food Table: Contains information about various food items and their calorie content.

FoodID (Primary Key)
FoodItem
Calories (Per single food item)

Goal Table: Lists the goals that users can set for themselves.

GoalID (Primary Key)
GoalType (e.g., Exercise/Nutrition)
Target (Specific target for the goal)
Description
Difficulty (e.g., Easy, Medium, Hard)

UserGoals Table: Associates users with their selected goals and tracks the status of each.

UserGoalID (Primary Key)
UserID (Foreign Key)
GoalID (Foreign Key)
Status (e.g., In Progress, Completed)
DateCreated
LastUpdated
DateCompleted

GoalProgress Table: Logs the progress users make towards their goals.

GoalProgressID (Primary Key)
UserGoalID (Foreign Key)
ProgressDate
Progress (Description or amount of progress)
ProgressAmount (Numeric representation of progress)


*/

CREATE TABLE User (
    UserID INT PRIMARY KEY,
    FullName VARCHAR(255),
    Username VARCHAR(100) UNIQUE,
    Email VARCHAR(255) UNIQUE,
    Password VARCHAR(255)
);

CREATE TABLE ExerciseLog (
    ExerciseLogID INT PRIMARY KEY,
    UserID INT,
    IntensityID INT,
    ExerciseID INT,
    Duration INT,
    Date DATE,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (IntensityID) REFERENCES Intensity(IntensityID),
    FOREIGN KEY (ExerciseID) REFERENCES Exercises(ExerciseID)
);

CREATE TABLE Intensity (
    IntensityID INT PRIMARY KEY,
    Intensity VARCHAR(50),
    BurnMultiplier DECIMAL(5,2)
);

CREATE TABLE Exercises (
    ExerciseID INT PRIMARY KEY,
    Exercise VARCHAR(100),
    CaloriesBurnt DECIMAL(5,2)
);

CREATE TABLE NutritionLog (
    NutritionLogID INT PRIMARY KEY,
    UserID INT,
    FoodID INT,
    Quantity DECIMAL(8,2),
    Date DATE,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (FoodID) REFERENCES Food(FoodID)
);

CREATE TABLE Food (
    FoodID INT PRIMARY KEY,
    FoodItem VARCHAR(100),
    Calories DECIMAL(5,2)
);

CREATE TABLE Goal (
    GoalID INT PRIMARY KEY,
    GoalType VARCHAR(100),
    Target VARCHAR(255),
    Description TEXT,
    Difficulty VARCHAR(50)
);

CREATE TABLE UserGoals (
    UserGoalID INT PRIMARY KEY,
    UserID INT,
    GoalID INT,
    Status VARCHAR(50),
    DateCreated DATE,
    LastUpdated DATE,
    DateCompleted DATE,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (GoalID) REFERENCES Goal(GoalID)
);

CREATE TABLE GoalProgress (
    GoalProgressID INT PRIMARY KEY,
    UserGoalID INT,
    ProgressDate DATE,
    Progress TEXT,
    ProgressAmount DECIMAL(8,2),
    FOREIGN KEY (UserGoalID) REFERENCES UserGoals(UserGoalID)
);
