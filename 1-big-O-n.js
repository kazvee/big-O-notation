// Notes from FreeCodeCamp `Big O Notation - Full Course`
// https://www.youtube.com/watch?v=Mo4vesaut8g

// What is Big O Notation?

// Linear function

// If a dentist needs 30min for each patient, we can calculate how long she would need for any number of patients
// Her efficiency is LINEAR
// In Big O Notation, this would be:
// Big O(n)
// where n is the number of patients

// Example function that scales similarly to the dentist

// This for loop is Big O(n):

function linearFunc(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(1000 * 100000)               // constant time
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
linearFunc(arr);

// When considering the efficiency of a function, lines that take constant time DO NOT MATTER for these purposes
// Even if the dentist took 3 hours per patient instead of 30min, her efficiency would still scale linearly

// What is a constant? Any step that doesn't scale with the input to the function
// For example:
// The time to evaluate this expression `const result = 100 * 1000` does not change with the input because both 100 and 1000 are constants
// This expression always results in the same value (100,000) and it always takes the same amount of time (or constant time) to evaluate the result

// We have a Big O name for constant algorithms:
// Big O(1)

// Let's reevaluate the above function (with some other lines added):

function linearFunc(array) { 
  for (let i = 0; i < array.length; i++) {        // this line is the entire reason the function is Big O (n)     
    console.log(1000 * 100000)                    // constant time, so O(1)
    let something = (200000000 * 200000000) / 2;  // constant time, so O(1)
    console.log(something)                        // constant time, so O(1)
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
linearFunc(arr);

// We only care about the worst case (or the highest order operation) for The Orders of Growth
// From good to bad on the scale, the ones in the above function are:
// O(1) constant
// O(n) linear
// and the only one that matters for Big O is: O(n) because it's the worst case