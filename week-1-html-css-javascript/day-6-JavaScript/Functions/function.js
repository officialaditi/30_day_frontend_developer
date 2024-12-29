// Declare a function fullName and it print out your full name.

const fullName = (name) => {
console.log(name)
};
fullName('Aditi')

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

const question2 = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`)
}
question2("Ufff",'Aditi')

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month) => {
    month = month.toLowerCase(); // Convert the input to lowercase for case-insensitivity
    if (['december', 'january', 'february'].includes(month)) {
        return 'Winter';
    } else if (['march', 'april', 'may'].includes(month)) {
        return 'Spring';
    } else if (['june', 'july', 'august'].includes(month)) {
        return 'Summer';
    } else if (['september', 'october', 'november'].includes(month)) {
        return 'Autumn';
    } else {
        return 'Invalid month'; // Handle invalid input
    }
};

// Example usage
console.log(checkSeason('January')); // Output: Winter

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (arr) => {
    const store = arr.toString().toUpperCase();
    console.log(store)
}
capitalizeArray(['a', 'b'])