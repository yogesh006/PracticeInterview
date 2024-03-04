


function greet(name, callback) {
    const greeting = `Hello, ${name}!`;
    callback(greeting); // Call the callback immediately
  }
  
  greet("Alice", (message) => {
    console.log(message); // Output: Hello, Alice!
  });
  
  console.log("This will print after the greeting.");
  