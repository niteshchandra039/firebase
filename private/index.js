

// can not be a reserved keyword
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hyphen (-)
// are case-sensitive

// Declaring variables  (var, let, const)   // let and const are new in ES6
// var name = 'Mosh'; // String Literal


// let firstName = 'Nitesh'; // String Literal
// let lastName = 'Kumar'; // String Literal

// const interestRate = 0.3;
// // interestRate = 1;
// console.log(interestRate);

// let name = 'Nitesh'; // String Literal
// let age = 27; // Number Literal
// let isApproved = false; // Boolean Literal
// let firstName = undefined;
// let lastName = null;

// const person = {
//     name: 'Nitesh',
//     age: 27
// };

// console.log(person);

// // Dot Notation
// person.name = 'John';

// // Bracket Notation
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person.name);


// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// console.log(selectedColors);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Nitesh', 'Kumar');

function square(number) {
    return number * number;
}

number = 3;
console.log('The square of', number , 'is:', square(number));
