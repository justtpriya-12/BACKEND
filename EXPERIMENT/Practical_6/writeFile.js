const fs = require('fs');

fs.writeFile('./EXPERIMENT/Practical_6/activity.txt', 'Student Priya logged in\n', (err) => {
    if (err) {
        console.log("Error occurred");
    } else {
        console.log("Data written successfully");
    }
});



// const fs = require('fs');

// fs.writeFileSync('./EXPERIMENT/Practical_6/activity.txt', 'Student Priya logged in\n');

// console.log("Data written successfully");