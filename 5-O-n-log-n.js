// O(n log n)

// Example function, let's say n = 4

// O(log N):
function nLogNFunc(n) {
  let y = n;                          // y keeps the original value for n
  while (n > 1) {
    n = Math.floor(n / 2);
    for (let i = 1; i <= y; i++) {
      console.log(i);
    }
  }
}