function factorial(num) {
    if (num < 0) {
      return "Factorial is not defined for negative numbers.";
    }
    
    return num === 0 ? 1 : [...Array(num).keys()].map(n => n + 1).reduce((acc, curr) => acc * curr, 1);
  }
  
  // Prompt the user to enter a number
  let userInput = prompt("Enter a number to find its factorial:");
  let number = parseInt(userInput);
  
  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else {
    console.log(`Factorial of ${number} is: ${factorial(number)}`);
  }
  