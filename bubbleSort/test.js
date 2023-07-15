function x() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 5000);
  }
}

console.log(x());

function y() {
  var x = 10;
}
