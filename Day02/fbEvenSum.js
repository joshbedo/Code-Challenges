/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3,5,6, 9. the sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000
 */

const fib = n => {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));
