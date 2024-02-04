# Design Document For Web App
Font Type:
Entire site will feature Futura Font

Color Scheme:
Primary Color: #3498db (Royal Blue)
Secondary Color: #2ecc71 (Emerald Green)
Accent Color: #e74c3c (Alizarin Crimson)

Different Button Color Options:
Button: Royal Blue with white text
Button: Emerald Green with white text
Button: Alizarin Crimson with white text
Button: Light gray with slightly darker text

Pages and Functions:

Home Button directs to Dashboard, User Button directs to Profile Page, “Graph” Button directs to Log Page

## a. Signup/Login Page:
Input fields for username and password on login page, will check the Users DB to authenticate if the user exists and can log in.

Input fields for name, email, username, password on sign up page
Button: Login
![*Login Page Concept*](./images/sign-up-page.jpg "Login Page")

## b. Dashboard:
Overview of daily/weekly progress, this page will query data from the Nutrtion-Log, Exercise-Log, UserGoals, and GoalProgress Table to display things such as, net calories for the day(Calories in - Calories burnt), goal progress made, etc.
![*Progress/Goal Page Concept*](./images/progress-page.jpg "Progress/Goal Page")

## c. Log Exercise/Food:
Dropdowns for exercise type, and intensity. Queried from the Exercises, Intensity, and Food tables respectively.

Input Field: Duration
Button: Log Exercise
Dropdown for food type
Input Field: food amount
Button: Log Food
![*Exercise/Food Log Page Concept*](./images/log-page.jpg "Exercise/Food Log Page")


## d. Profile Page:
View and edit personal information
Input Boxes: Change username, change email, change password, change name
Button: Save Changes
![*Settings Page Concept*](./images/settings-page.jpg "Settings Page")


## DB Schema:
These databases store the essential information required for the Fitness Tracker to function effectively.

- **User Table**: This table holds all user-related information.
  - UserID (Primary Key)
  - FullName
  - Username
  - Email
  - Password

- **Exercise-Log Table**: Here, we log the exercises performed by each user.
  - ExerciseLogID (Primary Key)
  - UserID (Foreign Key)
  - IntensityID (Foreign Key)
  - ExerciseID (Foreign Key)
  - Duration (In minutes)
  - Date

- **Intensity Table**: This table defines the intensity levels for exercises.
  - IntensityID (Primary Key)
  - Intensity (e.g., Low, Medium, High)
  - BurnMultiplier

- **Exercises Table**: Contains a list of exercises and their calorie burn rates.
  - ExerciseID (Primary Key)
  - Exercise
  - CaloriesBurnt (Calories burnt per minute)

- **Nutrition-Log Table**: This table records the food items consumed by the user.
  - NutritionLogID (Primary Key)
  - UserID (Foreign Key)
  - FoodID (Foreign Key)
  - Quantity
  - Date

- **Food Table**: Contains information about various food items and their calorie content.
  - FoodID (Primary Key)
  - FoodItem
  - Calories (Per single food item)

- **Goal Table**: Lists the goals that users can set for themselves.
  - GoalID (Primary Key)
  - GoalType (e.g., Exercise/Nutrition)
  - Target (Specific target for the goal)
  - Description
  - Difficulty (e.g., Easy, Medium, Hard)

- **UserGoals Table**: Associates users with their selected goals and tracks the status of each.
  - UserGoalID (Primary Key)
  - UserID (Foreign Key)
  - GoalID (Foreign Key)
  - Status (e.g., In Progress, Completed)
  - DateCreated
  - LastUpdated
  - DateCompleted

- **GoalProgress Table**: Logs the progress users make towards their goals.
  - GoalProgressID (Primary Key)
  - UserGoalID (Foreign Key)
  - ProgressDate
  - Progress (Description or amount of progress)
  - ProgressAmount (Numeric representation of progress)

