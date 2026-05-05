function rotate(arr, k) {
  let n = arr.length;
  k = k % n;

  let res = [];

  for (let i = n - k; i < n; i++) {
    res.push(arr[i]);
  }

  for (let i = 0; i < n - k; i++) {
    res.push(arr[i]);
  }

  return res;
}