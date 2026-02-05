console.log("Hello i am Priya");

const fs = require('fs');

fs.writeFile("./MY_PRACTICE/output.txt", "Writing text", (err) =>{
    if(err)
        console.log("Error occurred");
    else
        console.log('File written successfully');
})
