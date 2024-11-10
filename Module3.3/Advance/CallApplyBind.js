const chef1 = {
    name: "Gordon Ramsay",
  };
  
  const chef2 = {
    name: "Jamie Oliver"
  };
  
  // Function for Cooking a Dish
  function cookDish(dish, ingredients) {
    console.log(`${this.name} is preparing ${dish} with ${ingredients.join(", ")}!`);
  }
  
  // Using `call` to invoke `cookDish` for each chef with individual arguments
  cookDish.call(chef1, "Pasta", ["tomatoes", "basil", "olive oil"]); // Gordon Ramsay is preparing Pasta with tomatoes, basil, olive oil!
  cookDish.call(chef2, "Salad", ["lettuce", "cucumber", "feta"]);    // Jamie Oliver is preparing Salad with lettuce, cucumber, feta!
  
  // Using `apply` to invoke `cookDish` for each chef with an array of arguments
  cookDish.apply(chef1, ["Steak", ["salt", "pepper", "garlic"]]);    // Gordon Ramsay is preparing Steak with salt, pepper, garlic!
  cookDish.apply(chef2, ["Soup", ["carrots", "celery", "onions"]]);  // Jamie Oliver is preparing Soup with carrots, celery, onions!
  
  // Using `bind` to create a new function for always making Pizza with chef1
  const makePizza = cookDish.bind(chef1, "Pizza");
  makePizza(["cheese", "tomatoes"]);  // Gordon Ramsay is preparing Pizza with cheese, tomatoes!

  makePizza(["olives"]); // Second argument is dynamic and can be changed. 

// call: Invokes cookDish with individual arguments (first dish, then ingredients) and sets this to the specified chef object.
// apply: Works similarly to call but takes an array for arguments, which is useful if you already have your parameters in an array format.	
// bind: Creates a new function (makePizza) that permanently sets this to chef1 and the dish parameter to "Pizza". 
// When makePizza is called, it only needs the ingredients array.