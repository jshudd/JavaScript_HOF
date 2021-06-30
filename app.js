console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const plus = (num) => {
  return (plusNum) => num + plusNum;
};

const plus15 = plus(15);

console.log(plus15(10)); //prints 25

const numbers = [1, 2, 3, 4, 5];

console.log(plus15(...numbers)); //prints 16
console.log(plus15(1, 2, 3, 4, 5)); //prints 16; only uses 1 because function on takes in 1 parameter
