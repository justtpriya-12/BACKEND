const arr = [1, 2, 2, 3, 1];

const seen = {};
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (!seen[arr[i]]) {
    seen[arr[i]] = true;
    result.push(arr[i]);
  }
}

console.log(result); 