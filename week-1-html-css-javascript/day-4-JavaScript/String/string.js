// all question and pratices of string, string method:-

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = "30 Days Of JavaScript";
console.log(challenge);

// Print the string on the browser console using console.log()

// Print the length of the string .
let question3 = "Javascript";
console.log(question3.length);

// Change all the string characters to capital letters using toUpperCase() method
let question4 = "Im software engineer";
console.log(question4.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
let question5 = "Never give up";
console.log(question5.toLocaleLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
let question6 = "Software Engineer";
console.log(question6.substring(0, 9));

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let question7 = "30 Days Of JavaScript";
console.log(question7.slice(2));

// Check if the string contains a word Script using includes() method.
let question8 = "JavaScript";
console.log(question8.includes("Script"));

// Split the string into an array using split() method
let question9 = "javascript";
console.log(question9.split(""));

// Split the string 30 Days Of JavaScript at the space using split() method
let question10 = '30 Days Of JavaScript';
console.log(question10.split(" "));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let question11 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(question11.split(','))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let question12 = '30 Days Of JavaScript';
console.log(question12.replace('JavaScript','Python'));

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let question13 = '30 Days Of JavaScript';
console.log(question13.charAt(15));

// Use search to find the position of the first occurrence of the word "because" in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let question14 = 'You cannot end a sentence with because because because is a conjunction';
console.log(question14.search('because'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let question15 = ' 30 Days Of JavaScript ';
console.log(question15.trim());

// Use match() method to find all the a’s in 30 Days Of JavaScript;
let question16 = '30 Days Of JavaScript';
console.log(question16.match(/a/gi));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let question17Str1 = '30 Days of';
let question17Str2 = ' JavaScript';
console.log(question17Str1.concat( question17Str2));

// Use repeat() method to print 30 Days Of JavaScript 2 times
let question18 = '30 Days Of JavaScript';
console.log(question18.repeat(2));