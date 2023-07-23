// O(n^3) Explanation

// "O of n cubed"

// Example function

// Columns: i
// Rows: j
// Height: k

function cube(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}
