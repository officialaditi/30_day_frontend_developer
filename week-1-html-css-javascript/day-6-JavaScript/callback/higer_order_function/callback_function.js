function greet(name, callback) {
    console.log(`Hello, ${name}!`); // This runs immediately
    callback(); // This is the callback function
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Aditi", sayGoodbye);
  