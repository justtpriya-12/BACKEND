const arr = ['a', 'b', 'a', 'c'];

const freq = {};

for (let i = 0; i < arr.length; i++) {
  const key = arr[i];
  
  if (freq[key]) {
    freq[key] = freq[key] + 1;
  } else {
    freq[key] = 1;
  }
}

console.log(freq); 