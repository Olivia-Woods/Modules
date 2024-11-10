// Task 2: Making functions asynchronous with setTimeout

function preparePizza() {
    setTimeout(() => console.log("Started preparing pizza ..."), 1000);
  }
  
  const makeBase = function() {
    setTimeout(() => console.log("Made the base"), 2000);
  };
  
  const addSauceAndCheese = () => {
    setTimeout(() => console.log("Added the sauce and cheese"), 3000);
  };
  
  const addToppings = () => {
    setTimeout(() => console.log("Added the pizza toppings"), 4000);
  };
  
  const cookPizza = function() {
    setTimeout(() => console.log("Cooked the pizza"), 5000);
  };
  
  function pizzaReady() {
    setTimeout(() => console.log("Pizza is ready"), 6000);
  }
  
  // Calling the functions in sequence
  preparePizza();
  makeBase();
  addSauceAndCheese();
  addToppings();
  cookPizza();
  pizzaReady();