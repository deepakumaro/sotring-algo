/* count unique number

loop with j=1 and j<length

steps:
array[1]!==array[j]
    i++
    array[i] = array[j]
*/

function countUnique(array) {
  if (array.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    return 0;
  }
}

const result = countUnique([1, 2, 2, 4, 5, 5, 7, 7, 8, 9, 9]);
console.log(result);
