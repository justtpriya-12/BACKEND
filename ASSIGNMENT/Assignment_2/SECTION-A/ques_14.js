function interleave(arr1, arr2) {
  let res = [];
  let i = 0;

  while (i < arr1.length || i < arr2.length) {
    if (i < arr1.length) res.push(arr1[i]);
    if (i < arr2.length) res.push(arr2[i]);
    i++;
  }

  return res;
}