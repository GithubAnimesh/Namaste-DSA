// Example 1:

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`This is i ${i} this is j ${j}`);
  }
}

// Example 2

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(`This is i ${i} this is j ${j}`);
  }
}

//output:
// 1 0
// 2 0
// 2 1

// Example 3

for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(`This is i ${i} this is j ${j}`);
  }
}

//output:
//  i 0 j 0
//  i 1 j 0
//  i 1 j 1
//  i 2 j 0
//  i 2 j 1
//  i 2 j 2

// Example 4

for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(`This is i ${i} this is j ${j}`);
  }
}

//  output
//  This is i 1 this is j 1
// This is i 2 this is j 2
// This is i 2 this is j 1

// Example 5

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(`This is i ${i} this is j ${j}`);
  }
}

// output

// This is i 5 this is j 0
// This is i 5 this is j 1
// This is i 5 this is j 2
// This is i 5 this is j 3
// This is i 5 this is j 4
// This is i 4 this is j 0
// This is i 4 this is j 1
// This is i 4 this is j 2
// This is i 4 this is j 3
// This is i 3 this is j 0
// This is i 3 this is j 1
// This is i 3 this is j 2
// This is i 2 this is j 0
// This is i 2 this is j 1
// This is i 1 this is j 0
