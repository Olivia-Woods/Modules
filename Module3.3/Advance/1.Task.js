// Task 1: Function Declarations, Expressions, and Arrow Functions

// 1. Function Declaration
function preparePizza() {
    console.log("Started preparing pizza ...");
  }
  
  // 2. Function Expression
  const makeBase = function() {
    console.log("Made the base");
  };
  
  // 3. Arrow Function
  const addSauceAndCheese = () => {
    console.log("Added the sauce and cheese");
  };
  
  // 4. Arrow Function
  const addToppings = () => {
    console.log("Added the pizza toppings");
  };
  
  // 5. Function Expression
  const cookPizza = function() {
    console.log("Cooked the pizza");
  };
  
  // 6. Function Declaration
  function pizzaReady() {
    console.log("Pizza is ready");
  }
  
  // Calling the Functions in Sequence
  preparePizza();
  makeBase();
  addSauceAndCheese();
  addToppings();
  cookPizza();
  pizzaReady();