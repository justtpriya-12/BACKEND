const fs = require('fs');

fs.unlink('./EXPERIMENT/Practical_6/activity.txt', (err) => {
    if (err) {
        console.log("Error deleting file");
    } else {
        console.log("File deleted successfully");
    }
});


// const fs = require('fs');

// fs.unlinkSync('./EXPERIMENT/Practical_6/activity.txt');

// console.log("File deleted successfully");