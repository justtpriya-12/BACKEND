function merge(arr1, arr2) {
  let res = [];

  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    res.push(arr2[i]);
  }

  return res;
}