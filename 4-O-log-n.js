// O(log n) Explanation

// "O log n"

// RECURSIVE
// Example function, let's say n = 8

function logFunc(n) {
  if (n === 0) return "Done";
  n = Math.floor(n / 2);
  return logFunc(n);
}


// ITERATIVE / NON-RECURSIVE
// Example function, let's say n = 8

function logN(n) {
  while (n > 1) {
    n - Math.floor(n / 2)
  }
}

// BINARY SEARCH
// will only work on ordered arrays!

// Example function

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let end = arr.length - 1;
let target = 8;

function binarySearch(arr, start, end, target) {
  if (start > end) return false;
  
  let midIndex = Math.floor((start + end) / 2);
  if (arr[midIndex] === target) return true;

  if (arr[midIndex] > target) return binarySearch(arr, start, midIndex - 1, target)
  else return binarySearch(arr, midIndex +1, end, target)
}
