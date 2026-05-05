function countBy(arr, condition) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      count++;
    }
  }

  return count;
}