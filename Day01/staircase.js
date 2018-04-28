// With the example input of N=5 create a staircase
// the staircase should go down N and across N
//
// input: n=5
// output:
// #
// ##
// ###
// ####
// #####
//

// One way to do it
// function stairs(n) {
//   for (var i = 1; i <= n; i++) {
//       var col = i;
//       for(var j = 1; j <= n - col; j++) {
//           process.stdout.write(' ');
//       }
//       for(var j = 1; j <= col; j++) {
//           process.stdout.write('#');
//       }
//       process.stdout.write('\n');
//   }
// }

function stairs(n) {
  var line = Array(n + 1).fill(' ');
  line[n] = '\n';
  for (var i = n - 1; i >= 0; i--) {
    line[i] = '#';
    process.stdout.write(line.join(''));
  }
}

stairs(5);
