/* Problem
In a country 
, all the ants move in a circle. There is a circle marked with 
 marks with numbers from 
 to 
 clockwise. There are 
 ants on the circle. No two ants stand on the same mark initially. It is also known in which direction each ant will move. If two ants meet during the movement, then each of them begins to move in a different direction. Your task is to determine where the ants will be after 
 seconds of such movement.

Input format

The first line contains the numbers  
.
The following 
 lines have the following format:
Each line contains two numbers 
 and 
. The first number of this line 
 is the position of the ant, the second number of this line 
 is the direction in which the ant moves. Here, 
, if the ant starts to move clockwise and 
 if counterclockwise. The distances between adjacent marks are the same. In one second, the ant overcomes a distance equal to the distance between adjacent marks on the circle.
Output format

In the first line, print 
 integers in ascending order denoting the positions where the ants will be in 
 seconds after such obsessive moves. 
 
 
 ---- INPUT AND OUTPUT-------
 
 Sample Input
5 2 1
2 1
3 -1
Sample Output
2 3 
*/

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
  console.log(stdin_input);
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  let data = input.split("\n");
  let arg = parseInt(data[0]);
  let ants = [];
  for (let i = 1; i < arg[1]; i++) {
    let annArray = [...data[i]];
    ants.push(annArray);
  }
  let us = antPos(...arg, ants);
  process.stdout.write(...bubblesort(us)); // Writing output to STDOUT
}

let antPos = (n, m, t, ants) => {
  let antsPosArray = [];
  for (let i = 0; i < m; i++) {
    let x = ants[i][0];
    let y = ants[i][1];

    x = (x - 1 + y * t) % n;
    x = (x + n) % n;
    antsPosArray.push(x + 1);
  }
  return antsPosArray;
};

let bubblesort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
