# Code-Challenges
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
