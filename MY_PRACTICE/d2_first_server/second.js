console.log("Hello")

const fs = require('fs');

let a = 2;
let b = 5;

let sum = a+b;
let product = a*b;

let data = `sum ${sum} and product ${product}`;
console.log(data);

fs.writeFile("./MY_PRACTICE/d2_first_server/output.txt", data, (err) => {
  if(err) throw err;
  console.log("data written");
})