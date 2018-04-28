# Code Challenges
A bunch of different code challenges for fun

# The Staircase Code Challenge
Using the following input N=5 code a function that builds a staircase N rows and N columns

```
input: N=5
output:
#
##
###
####
#####
```

# Finding The Calendar Event Conflicts Challenge
Using the following dataset as your input code a function that returns events with conflicting times.

```
// input
// ex: [start, end, id]
const calendar = [
  [1, 2, 'a'],
  [3, 5, 'b'],
  [4, 6, 'c'],
  [7, 10, 'd'],
  [8, 11, 'e'],
  [10, 12, 'f'],
  [13, 14, 'g'],
  [13, 14, 'h']
];
```

```
// output:
[ [ 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h' ] ]
```

# Check if string is Palindrome
Create a function to check if the input is a Palindrome and return true or false.

```
// Create a function to check if `str` is a Palindrome
// https://en.wikipedia.org/wiki/Palindrome
//
// ex: Amy, must I juijitsu my ma?
// Anna
// Anne, I vote more cars race Rome to Vienna

const checkPalindrome = str => {
  return str === str.split('').reverse().join('');
}
```
