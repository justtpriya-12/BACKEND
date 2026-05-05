function createRange(start, end) {
  let res = [];

  if (start > end) return res; 

  for (let i = start; i <= end; i++) {
    res.push(i);
  }

  return res;
}