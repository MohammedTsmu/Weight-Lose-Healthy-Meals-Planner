// Define the meals data
const mealsData = [
  {
    name: 'Turkey Burger with Avocado and Sweet Potato Fries',
    protein: 25,
    vegetables: 100,
    carbohydrates: 100,
    salad: 0,
    calories: 350
  }, { name: 'Grilled Chicken with Quinoa Salad', protein: 30, vegetables: 0, carbohydrates: 0, salad: 100, calories: 250 },
  { name: 'Salmon and Mixed Greens Salad', protein: 25, vegetables: 0, salad: 150, carbohydrates: 0, calories: 300 },
  { name: 'Vegetarian Chickpea Salad', protein: 15, vegetables: 0, salad: 80, carbohydrates: 0, calories: 150 },
  { name: 'Roast Beef and Arugula Salad', protein: 35, vegetables: 0, salad: 120, carbohydrates: 0, calories: 280 },
  { name: 'Grilled Chicken with Sweet Potato and Broccoli', protein: 30, vegetables: 150, salad: 100, carbohydrates: 100, calories: 350 },
  { name: 'Salmon with Brown Rice and Asparagus', protein: 25, vegetables: 150, salad: 100, carbohydrates: 100, calories: 350 },
  { name: 'Grilled Salmon with Roasted Carrots and Cauliflower Rice', protein: 25, vegetables: 150, salad: 100, carbohydrates: 50, calories: 300 },
  { name: 'Roast Beef with Steamed Broccoli and Sweet Potato Mash', protein: 35, vegetables: 150, salad: 100, carbohydrates: 100, calories: 400 },
  { name: 'Turkey Burger with Avocado and Sweet Potato Fries', protein: 25, vegetables: 100, salad: 100, carbohydrates: 100, calories: 350 },
  { name: 'Oven-Baked Salmon with Green Beans and Quinoa', protein: 25, vegetables: 150, salad: 100, carbohydrates: 100, calories: 350 },
  {
    name: 'Spinach and Feta Stuffed Chicken with Roasted Carrots',
    protein: 30,
    vegetables: 150,
    carbohydrates: 50,
    salad: 0,
    calories: 350
  }, {
    name: 'Grilled Steak with Grilled Bell Peppers and Cauliflower Rice',
    protein: 35,
    vegetables: 150,
    carbohydrates: 50,
    salad: 0,
    calories: 400
  }, {
    name: 'Roasted Chicken Thighs with Brussels Sprouts and Sweet Potato Mash',
    protein: 25,
    vegetables: 150,
    carbohydrates: 100,
    salad: 0,
    calories: 350
  }, {
    name: 'Grilled Salmon with Roasted Cauliflower and Sweet Potato',
    protein: 25,
    vegetables: 150,
    carbohydrates: 100,
    salad: 0,
    calories: 350
  }, {
    name: 'Chicken and Vegetable Skewers with Quinoa',
    protein: 30,
    vegetables: 150,
    carbohydrates: 100,
    salad: 0,
    calories: 350
  }, {
    name: 'Beef and Broccoli Bowl with Brown Rice',
    protein: 35,
    vegetables: 150,
    carbohydrates: 100,
    salad: 0,
    calories: 400
  }, {
    name: 'Veggie Burger with Sweet Potato Fries and Roasted Brussel Sprouts',
    protein: 20,
    vegetables: 200,
    carbohydrates: 100,
    salad: 0,
    calories: 350
  }, {
    name: 'Spinach and Feta Scrambled Eggs with Roasted Tomatoes and Avocado',
    protein: 20,
    vegetables: 100,
    carbohydrates: 50,
    salad: 0,
    calories: 350
  },
  {
    name: 'Egg Salad Wrap with Mixed Greens and Carrots',
    protein: 15,
    vegetables: 100,
    carbohydrates: 50,
    salad: 0,
    calories: 250
  },
  {
    name: 'Vegetable Omelette with Whole Wheat Toast and Berries',
    protein: 20,
    vegetables: 100,
    carbohydrates: 30,
    salad: 0,
    calories: 300
  },
  {
    name: 'Spinach and Feta Scrambled Eggs with Roasted Tomatoes and Avocado',
    protein: 20,
    vegetables: 100,
    carbohydrates: 50,
    salad: 0,
    calories: 350
  },
  {
    name: 'Egg Salad Wrap with Mixed Greens and Carrots',
    protein: 15,
    vegetables: 100,
    carbohydrates: 50,
    salad: 0,
    calories: 250
  },
  {
    name: 'Quinoa and Egg Bowl with Roasted Vegetables',
    protein: 20,
    vegetables: 150,
    carbohydrates: 100,
    salad: 0,
    calories: 350
  },
  {
    name: 'Sweet Potato and Kale Frittata with Sliced Apple',
    protein: 20,
    vegetables: 100,
    carbohydrates: 30,
    salad: 0,
    calories: 300
  }, {
    name: 'Egg and Avocado Toast with Sliced Cucumber',
    protein: 15,
    vegetables: 50,
    carbohydrates: 30,
    salad: 0,
    calories: 200
  }, {
    name: 'Grilled Chicken and Zucchini Skewers with Cauliflower Rice',
    protein: 30,
    vegetables: 150,
    carbohydrates: 50,
    salad: 0,
    calories: 350
  }, {
    name: 'Broiled Salmon with Asparagus and Roasted Brussels Sprouts',
    protein: 25,
    vegetables: 200,
    carbohydrates: 50,
    salad: 0,
    calories: 350
  },
  {
    name: 'Grilled Shrimp and Vegetable Kabobs with Cucumber Salad',
    protein: 25,
    vegetables: 150,
    carbohydrates: 30,
    salad: 0,
    calories: 300
  },
  {
    name: 'Stuffed Bell Peppers with Ground Turkey and Cauliflower Rice',
    protein: 25,
    vegetables: 200,
    carbohydrates: 30,
    salad: 0,
    calories: 350
  },
  {
    name: 'Spaghetti Squash with Meatballs and Roasted Broccoli',
    protein: 30,
    vegetables: 150,
    carbohydrates: 50,
    salad: 0,
    calories: 400
  },
  {
    name: 'Grilled Portobello Mushroom with Roasted Eggplant and Mixed Greens',
    protein: 10,
    vegetables: 200,
    carbohydrates: 30,
    salad: 0,
    calories: 250
  }, {
    name: 'Grilled Salmon with Steamed Broccoli and Quinoa Salad',
    protein: 25,
    vegetables: 100,
    carbohydrates: 50,
    salad: 0,
    calories: 350
  }, {
    name: 'Baked Chicken Breast with Roasted Carrots and Cauliflower Mash',
    protein: 30,
    vegetables: 150,
    carbohydrates: 30,
    salad: 0,
    calories: 350
  }, {
    name: 'Beef Stir Fry with Mixed Vegetables and Brown Rice',
    protein: 25,
    vegetables: 150,
    carbohydrates: 50,
    salad: 0,
    calories: 400
  }, {
    name: 'Beef and Broccoli Stir Fry with Zucchini Noodles',
    protein: 25,
    vegetables: 200,
    carbohydrates: 30,
    salad: 0,
    calories: 400
  }, {
    name: 'Grilled Salmon with Lemon Butter Sauce and Steamed Broccoli',
    protein: 25,
    vegetables: 100,
    carbohydrates: 5,
    salad: 0,
    calories: 350
  }, {
    name: 'Pan-Fried Chicken Thighs with Roasted Cauliflower and Green Beans',
    protein: 30,
    vegetables: 150,
    carbohydrates: 7,
    salad: 0,
    calories: 400
  }, {
    name: 'Grilled Steak with Garlic Butter Mushrooms and Asparagus',
    protein: 30,
    vegetables: 100,
    carbohydrates: 7,
    salad: 0,
    calories: 400
  }, {
    name: 'Spicy Shrimp and Avocado Salad with Mixed Greens',
    protein: 25,
    vegetables: 100,
    carbohydrates: 7,
    salad: 0,
    calories: 300
  }, {
    name: 'Sesame Ginger Beef Stir Fry with Cauliflower Rice',
    protein: 30,
    vegetables: 150,
    carbohydrates: 7,
    salad: 0,
    calories: 400
  }, {
    name: 'Lemon Butter Chicken Thighs with Garlic Roasted Brussels Sprouts',
    protein: 30,
    vegetables: 100,
    carbohydrates: 7,
    salad: 0,
    calories: 400
  }, {
    name: 'Baked Salmon with Roasted Garlic Butter Broccoli',
    protein: 25,
    vegetables: 100,
    carbohydrates: 5,
    salad: 0,
    calories: 350
  }, {
    name: 'Grilled Ribeye Steak with Sauteed Mushrooms and Asparagus',
    protein: 30,
    vegetables: 100,
    carbohydrates: 7,
    salad: 0,
    calories: 450
  },
  {
    name: 'Buffalo Chicken Lettuce Wraps with Celery and Blue Cheese Dressing',
    protein: 25,
    vegetables: 100,
    carbohydrates: 5,
    salad: 0,
    calories: 300
  },
  {
    name: 'Grilled Chicken Skewers with Bell Peppers and Onions',
    protein: 25,
    vegetables: 100,
    carbohydrates: 5,
    salad: 0,
    calories: 300
  }
];

// Define a function to get a random meal from the meals data
function getRandomMeal() {
  // Shuffle the meals data
  const shuffledMeals = mealsData.sort(() => 0.5 - Math.random());
  // Get two random meals
  const randomMeals = shuffledMeals.slice(0, 2);
  // Return the random meals
  return randomMeals;
}

// Define a function to calculate the total calories for the day
function getTotalCalories(meals) {
  // Initialize the total calories to 0
  let totalCalories = 0;
  // Loop through the meals and add up their calories
  meals.forEach((meal) => {
    totalCalories += meal.calories;
  });
  // Return the total calories
  return totalCalories;
}

// Define a function to display the meals and total calories
function displayMeals(meals, totalCalories) {
  // Get the meal placeholders
  const meal1 = document.getElementById('meal1');
  const meal2 = document.getElementById('meal2');
  // Display the meals
  meal1.innerHTML = `<div class='card-box'> <div class='card'> ${meals[0].name} (${meals[0].protein}g protein,${meals[0].carbohydrates}g carbohydrates,${meals[0].vegetables}g vegetables, ${meals[0].salad}g salad, ${meals[0].calories} calories) </div>
  </div>`;
  meal2.innerHTML = `<div class='card-box'> <div class='card'> ${meals[1].name} (${meals[1].protein}g protein,${meals[0].carbohydrates}g carbohydrates,${meals[0].vegetables}g vegetables, ${meals[1].salad}g salad, ${meals[1].calories} calories) </div>
  </div>`;
  // meal1.innerHTML = `<div class='card-box'> <div class='card'> ${meals[0].name} (${meals[0].protein}g protein, ${meals[0].salad}g salad, ${meals[0].calories} calories) </div>
  // </div>`;
  // meal2.innerHTML = `<div class='card-box'> <div class='card'> ${meals[1].name} (${meals[1].protein}g protein, ${meals[1].salad}g salad, ${meals[1].calories} calories) </div>
  // </div>`;
  //
  // Get the total calories placeholder
  const totalCaloriesPlaceholder = document.getElementById('totalCalories');
  // Display the total calories
  totalCaloriesPlaceholder.innerHTML = "<div class='card-box'> <div class='card'> " + totalCalories + "</div></div>";
}

// Define a function to check if a meal is already in the local storage
function isMealInLocalStorage(meal) {
  // Get the meals from the local storage
  const meals = JSON.parse(localStorage.getItem('meals')) || [];
  // Check if the meal is already in the local storage
  const isMealInLocalStorage = meals.some(
    (savedMeal) => savedMeal.name === meal.name
  );
  // Return the result
  return isMealInLocalStorage;
}

// Define a function to save the meals to the local storage
function saveMealsToLocalStorage(meals) {
  // Get the meals from the local storage
  const savedMeals = JSON.parse(localStorage.getItem('meals')) || [];
  // Add the new meals to the saved meals
  const updatedMeals = savedMeals.concat(meals);
  // Save the updated meals to the local storage
  localStorage.setItem('meals', JSON.stringify(updatedMeals));
}

// Get the current date
const currentDate = new Date();

// Get the meals from the local storage or generate new ones
const savedMeals = JSON.parse(localStorage.getItem('meals')) || [];
let meals;
if (
  savedMeals.length === 0 ||
  currentDate.getDay() !== new Date(savedMeals[savedMeals.length - 1].date).getDay()
) {
  // Generate new meals if there are no saved meals or if the last saved meal was from a different day
  meals = getRandomMeal();
  // Save the new meals to the local storage
  saveMealsToLocalStorage(
    meals.map((meal) => ({ ...meal, date: currentDate.toISOString() }))
  );
} else {
  // Use the saved meals if they are from the same day
  meals = savedMeals.slice(savedMeals.length - 2);
}

// Calculate the total calories for the day
const totalCalories = getTotalCalories(meals);

// Display the meals and total calories
displayMeals(meals, totalCalories);