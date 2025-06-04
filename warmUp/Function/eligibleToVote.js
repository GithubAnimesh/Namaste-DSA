//Write a function that accepts a person’s age and prints whether the person is:

function eligibleToVote(age) {
  if (age < 1) {
    console.log("Invalid input");
  } else if (age < 18) {
    console.log("Not eligible to vote");
  } else {
    console.log("Eligible to vote");
  }
}

eligibleToVote(20);
