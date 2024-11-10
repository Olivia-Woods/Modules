// Task 4: Using async/await

async function preparePizza() {
    await new Promise((resolve) => setTimeout(() => {
      console.log("Started preparing pizza ...");
      resolve();
    }, 1000));
  }
  
  async function makeBase() {
    await new Promise((resolve) => setTimeout(() => {
      console.log("Made the base");
      resolve();
    }, 2000));
  }
  
  async function addSauceAndCheese() {
    await new Promise((resolve) => setTimeout(() => {
      console.log("Added the sauce and cheese");
      resolve();
    }, 3000));
  }
  
  async function addToppings() {
    await new Promise((resolve) => setTimeout(() => {
      console.log("Added the pizza toppings");
      resolve();
    }, 4000));
  }
  
  async function cookPizza() {
    await new Promise((resolve) => setTimeout(() => {
      console.log("Cooked the pizza");
      resolve();
    }, 5000));
  }
  
  async function pizzaReady() {
    await new Promise((resolve) => setTimeout(() => {
      console.log("Pizza is ready");
      resolve();
    }, 6000));
  }
  
  // Using async/await to call functions in order
  async function makePizza() {
    await preparePizza();
    await makeBase();
    await addSauceAndCheese();
    await addToppings();
    await cookPizza();
    await pizzaReady();
  }
  
  makePizza();