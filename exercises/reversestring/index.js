// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//   FOR LOOP --------------------

//   let reversed = "";

//   for (let character of str) {
//       //this new syntax only works if it is incremented by one and iterating through all of the items.
//     reversed = character + reversed;
//   }

//   return reversed;

// My answer -------------------
//   let array = [];

//   for (let i = 0; i < str.length; i++) {
//     array.push(str[i]);
//   }
//   array.reverse();
//   let newString = array.join("");
//   return newString;

// SHORTEST SOLUTION ---------
// let arr = str.split("")
// arr.reverse()
// return arr.join("")

// return str.split("").reverse().join("")
// 1. string.split turns the string into an array
// 2. reduce is use to take all the values to one single value
// 3. reduce takes 2 arguments. The first one is an arrow function. The second is the starting initial value for our function.
// 4. whenever reduce runs, it's going to take the starting argument, pass it into the function as the first argument and then whatever gets returned will be used as the starting argument. The function will run one time for every element of the array.
// 5. The first argument will be our reversed string, the second argument is each character.

function reverse(str) {
  debugger;
  return str.split("").reduce((reversedString, char) => {
    return char + reversedString;
  }, "");
}

reverse("alskdf");

module.exports = reverse;
