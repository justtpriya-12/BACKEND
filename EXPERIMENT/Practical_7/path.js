const path = require('path');

const filePath = path.join('folder', 'subfolder', 'file.txt');

console.log("Joined Path:", filePath);
console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));
console.log("Directory Name:", path.dirname(filePath));