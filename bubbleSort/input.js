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
  // var data = input.split("\n");
  process.stdout.write("Hi, " + input + ".\n"); // Writing output to STDOUT
}

console.log(main());
