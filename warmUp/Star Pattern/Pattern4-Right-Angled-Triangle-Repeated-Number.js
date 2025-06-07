function repeatedNumber(n) {
  for (let i = 1; i <= n; i++) {
    let num = "";
    for (let j = 0; j < i; j++) {
      num += i;
    }
    console.log(num);
  }
}

repeatedNumber(4);

// output
// 1
// 22
// 333
// 4444
