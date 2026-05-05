const arr = [1, 2, 3];
const reversed = [];
let k = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  reversed[k] = arr[i];
  k++;

}

console.log(reversed); 