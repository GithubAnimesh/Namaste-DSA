//Write a function that reverses a string. The input string is given as an array of characters s.

function reverseString() {
  let arr = ["h", "e", "l", "l", "o"];
  let loopCount = Math.floor(arr.length / 2);
  for (let i = 0; i < loopCount; i++) {
    // swap two value beetween pointer1 arr[i] to pointer2 arr[arr.length - 1 - i];
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr);
}

reverseString();
