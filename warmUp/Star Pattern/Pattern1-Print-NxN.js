//Pattern 1 – Print n x n Star Square
//Print a square pattern of stars (*) of size n x n.

function pattern1NxN(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

pattern1NxN(4);

// output
// ****
// ****
// ****
// ****
