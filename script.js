function myFunction() {
    alert("I am an alert box!");
  }


  const x = (x, y) => x * y;
  document.getElementById("demo").innerHTML = x(5, 5);

  // Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Destructuring Assignment
  let { firstName, age } = person;
  
  // Display Data
  document.getElementById("demo2").innerHTML =
  firstName + " is " + age + " years old.";