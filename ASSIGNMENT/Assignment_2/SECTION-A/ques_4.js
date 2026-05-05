const arr = [7, 3, 9, 0];

const min = arr.reduce((min, v) => v < min ? v : min, Infinity)

console.log(min);

