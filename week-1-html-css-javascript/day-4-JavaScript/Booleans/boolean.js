//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'aditi';
let lastName = 'happy';
let country = 'korea';
let city = 'seoul';
let age = 22;
let isMarried = false;
let year = 2024;

console.log(typeof(firstName))
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isMarried));


// Check if type of '10' is equal to 10
console.log('10' === 10);

// What is the year today?
let todayYear = new Date().getFullYear();
console.log(todayYear); 
// Outputs the current year, e.g., 2024


// give me day => sun,mon.. /it will provide the index of the day starting from 0
let date = new Date().getDay();
console.log(date);

let hours = new Date().getHours();
console.log(hours);

let month = new Date().getMonth();
console.log(month);

let minute = new Date().getMinutes();
console.log(minute)
