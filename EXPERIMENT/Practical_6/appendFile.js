const fs = require('fs');

fs.appendFile('./EXPERIMENT/Practical_6/activity.txt', 'Student Arjun completed assignment\n', (err) => {
    if (err) {
        console.log("Error occurred");
    } else {
        console.log("Data appended successfully");
    }
});


// const fs = require('fs');

// fs.appendFileSync('./EXPERIMENT/Practical_6/activity.txt', 'Student Arjun completed assignment\n');

// console.log("Data appended successfully");