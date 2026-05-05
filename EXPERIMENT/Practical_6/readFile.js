const fs = require('fs');

fs.readFile('./EXPERIMENT/Practical_6/activity.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error occurred");
    } else {
        console.log("File Content:");
        console.log(data);
    }
});


// const fs = require('fs');

// const data = fs.readFileSync('./EXPERIMENT/Practical_6/activity.txt' 'utf8');

// console.log("File Content:");
// console.log(data);