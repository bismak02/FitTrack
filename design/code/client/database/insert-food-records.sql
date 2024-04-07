/*

Need to generate food item records to be inserted onto the food table

Food Table: Contains information about various food items and their calorie content.

FoodID (Primary Key)
FoodItem
Calories (Per single food item)

Example:

FoodID: 1
FoodItem: Banana
Calories: 120

*/
INSERT INTO Food (FoodID, FoodItem, Calories) VALUES
    (1, 'Banana', 120),
    (2, 'Apple', 95),
    (3, 'Chicken Breast (cooked, skinless)', 165),
    (4, 'Salmon Fillet (cooked)', 200),
    (5, 'Brown Rice (cooked)', 215),
    (6, 'Broccoli (steamed)', 55),
    (7, 'Spinach (raw)', 7),
    (8, 'Eggs (boiled)', 78),
    (9, 'Whole Wheat Bread (1 slice)', 70),
    (10, 'Greek Yogurt (plain, low-fat)', 100),
    (11, 'Oatmeal (cooked, plain)', 150),
    (12, 'Almonds (raw, 1 oz)', 160),
    (13, 'Avocado (medium)', 240),
    (14, 'Sweet Potato (baked)', 100),
    (15, 'Cottage Cheese (low-fat)', 120);