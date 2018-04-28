// Create a function to check if `str` is a Palindrome
// https://en.wikipedia.org/wiki/Palindrome
//
// ex: Amy, must I juijitsu my ma?
// Anna
// Anne, I vote more cars race Rome to Vienna

const checkPalindrome = str => {
  return str === str.split('').reverse().join('');
}
