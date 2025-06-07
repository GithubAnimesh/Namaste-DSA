// Pattern 8 - Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
// Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

function patern7(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggole = 1;
    for (let j = 0; j <= i; j++) {
      toggole = toggole === 1 ? 0 : 1;
      row += toggole;
    }
    console.log(row);
  }
}

patern7(4);

// output
// 1
// 01
// 010
// 1010
