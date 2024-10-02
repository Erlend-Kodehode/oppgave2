/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/

// This function takes a number as a parameter and uses modulo to figure out if the number is divisable by 2, if it is the function returns "Even" if it isn't it returns "Odd"

function oddOrEvenCheck(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/

// This function uses the "toUpperCase()" method to capitalize the letters and template literal to add an exclamation mark at the end

const shoutText = (text) => {
  return `${text.toUpperCase()}!`;
};

/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/

// The function first checks if it has recieved a time and then it checks whether or not its between 0 and 23. Then the functions goes through a series of if else statements to return the appropriate message to the given time

function greeter(name, time) {
  if (time || time === 0) {
    if (time >= 0 && time <= 23) {
      if (time <= 5) {
        return `Good night ${name}`;
      } else if (time <= 11) {
        return `Good morning ${name}`;
      } else if (time <= 17) {
        return `Good day ${name}`;
      } else if (time >= 18) {
        return `Good evening ${name}`;
      }
    } else {
      return "Invalid time";
    }
  } else {
    return "Missing time of day";
  }
}

/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/

// The function uses "shift()" and "pop()" to remove the first and the last index

const firstAndLastRemover = (array) => {
  array.shift();
  array.pop();
  return array;
};

/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

// Function uses "replace()" to replace the words and "trim()" to remove the whitespace

function hardToFun(text) {
  return text.replace("hard", "fun").trim();
}

/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];

heroes.shift();
heroes[2] = "Skrull";
heroes.splice(0, 2, "Captain America");
console.log(heroes.join("💪"));

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

//This function uses the "typeof" operator inside of a switch statement to determine the datatype and returns the correct thing based on said datatype

// I also used template literal to add the emojis to the beginning and end, and to convert the value to string in one go

const coolFunction = (value) => {
  switch (typeof value) {
    case "string":
      return `😎${value}😎`;

    case "number":
      return `😎${value * 2}😎`;

    case "boolean":
      return value ? "😎Yeah😎" : "😎Chill😎";
    default:
      return "😎Primitive values only😎";
  }
};

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

// The function checks if the array contains the string using the "includes()" method, and then if the check is successful it uses splice in combination with indexOf to remove the correct element. If the check is unsuccessful it pushes the string at the end

function addOrRemove(array, string) {
  if (array.includes(string)) {
    return array.toSpliced(array.indexOf(string), 1);
  } else {
    array.push(string);
    return array;
  }
}
