/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

const getMaxPrime = n => {
  var primes = [2];
  var i = 3;
  var j = 2;
  var maxPrimes = n || 10001;

  while (primes.length < maxPrimes) {
    while (i % j !== 0) {
      j++;

      if (j === i) {
        primes.push(i);
        break;
      }
    }

    i++;
    j = 2;
  }

  return primes[primes.length-1];
};

console.log(getMaxPrime(10001))
