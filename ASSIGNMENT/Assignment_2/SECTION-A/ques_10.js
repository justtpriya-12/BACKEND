function chunk(arr, size) {
  let res = [];

  for (let i = 0; i < arr.length; i += size) {
    let temp = [];

    for (let j = i; j < i + size && j < arr.length; j++) {
      temp.push(arr[j]);
    }

    res.push(temp);
  }

  return res;
}