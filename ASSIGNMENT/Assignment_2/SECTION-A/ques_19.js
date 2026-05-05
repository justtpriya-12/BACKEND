function uniqueSorted(arr) {
  let seen = {};
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      res.push(arr[i]);
    }
  }

  return res.sort((a, b) => a - b);
}