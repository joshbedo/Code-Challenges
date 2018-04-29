/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3,5,6, 9. the sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000
 */

const add = (a,b) => {
  return a+b;
}

const findSum = n => {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }

  // Return the sum
  return arr.reduce(add, 0);
}

findSum(1000);
