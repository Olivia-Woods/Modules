// Task 3: Using Promises

function preparePizza() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Started preparing pizza ...");
        resolve();
      }, 1000);
    });
  }
  
  const makeBase = function() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Made the base");
        resolve();
      }, 2000);
    });
  };
  
  const addSauceAndCheese = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Added the sauce and cheese");
        resolve();
      }, 3000);
    });
  };
  
  const addToppings = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Added the pizza toppings");
        resolve();
      }, 4000);
    });
  };
  
  const cookPizza = function() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Cooked the pizza");
        resolve();
      }, 5000);
    });
  };
  
  function pizzaReady() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Pizza is ready");
        resolve();
      }, 6000);
    });
  }
  
  // Chaining Promises to maintain the order
  preparePizza()
    .then(makeBase)
    .then(addSauceAndCheese)
    .then(addToppings)
    .then(cookPizza)
    .then(pizzaReady);