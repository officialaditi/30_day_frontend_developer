//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt("Enter your age:"); // Takes input as a string
// age = Number(age); // Convert input to a number

// if (age >= 18) {
//     console.log('You are old enough to drive');
// } else if (age < 18) {
//     let yearsLeft = 18 - age;
//     console.log(`You need to wait ${yearsLeft} more year's to drive.`);
// } else {
//     console.log('Invalid input');
// }

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let myAge = Number(prompt("Enter your age:"));
// // Convert input to a number
// let userAge = Number(prompt("Enter user's age:"));
// // Convert input to a number

// if (myAge > userAge) {
//     let difference = myAge - userAge;
//     console.log(`I am ${difference} year(s) older than you.`);
// } else if (myAge < userAge) {
//     let difference = userAge - myAge;
//     console.log(`You are ${difference} year(s) older than me.`);
// } else if (myAge === userAge) {
//     console.log("We are the same age.");
// } else {
//     console.log("Invalid input! Please enter valid ages.");
// }

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.

// let a = 10;
// let b = 20;
// if(a < b){
//     console.log('a is greater than b')
// } else{
//     console.log('b is greate than a')
// }

// a < b ? console.log('a is greater than b'): console.log('b is greater than a');

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let getNumber = Number(prompt('Enter a number:- '));
// if(getNumber % 2 === 0){
//     console.log(`${getNumber} is an even number`)
// } else {
//     console.log(`${getNumber} is an odd number` )
// }

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let youScore = Number(prompt("Enter your score:"));

if (youScore >= 80 && youScore <= 100) {
    console.log("You got an A");
} else if (youScore >= 70 && youScore < 80) {
    console.log("You got a B");
} else if (youScore >= 60 && youScore < 70) {
    console.log("You got a C");
} else if (youScore >= 50 && youScore < 60) {
    console.log("You got a D");
} else if (youScore >= 0 && youScore < 50) {
    console.log("You got an F");
} else {
    console.log("Invalid input! Please enter a score between 0 and 100.");
}


