// Find the conflicts within the calendar data
// Create a linear solution O(n)
//
// Does event `a` overlap `b` or `c`? We can assume the input is already
// sorted. How we can we see if any events `conflict` and return them.

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

/**
 * Check to see if any events overlap and return them
 */
const findConflicts = cal => {
  let conflicts = [];
  let temp = [cal[0][2]];
  let end = cal[0][1];

  for (let i = 1;i < cal.length; i++) {
    // Check to see if time conflict
    // Is the next event's start time greater than the current
    // event's end time?
    if (cal[i][0] >= end) {
      if (temp.length > 1) {
        conflicts.push(temp);
      }
      temp = [];
    }

    end = Math.max(cal[i][1], end);
    temp.push(cal[i][2]);
  }

  if (temp.length > 1) {
    conflicts.push(temp);
  }

  return conflicts;
}

console.log(findConflicts(calendar));
