const unSrotedArray = [234, 43, 55, 63, 5, 6, 235, 547];

// compare each index with the next one
// compare them according to the order
// swap if needed

// sorting in ascending order

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

console.log(bubblesort(unSrotedArray));
