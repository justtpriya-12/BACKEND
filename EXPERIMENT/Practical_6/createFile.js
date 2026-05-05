const fs = require('fs');

fs.writeFile('./EXPERIMENT/Practical_6/activity.txt', 'Student Activity Log\n', (err) => {
    if (err) {
        console.log("Error occurred");
    } else {
        console.log("File created successfully");
    }
});



// const fs = require('fs');

// fs.writeFileSync('./EXPERIMENT/Practical_6/activity.txt', 'Student Activity Log\n');

// console.log("File created successfully");