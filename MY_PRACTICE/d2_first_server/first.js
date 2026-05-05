console.log("Hello i am Priya");

const fs = require('fs');

fs.writeFile("./MY_PRACTICE/d2_first_server/output.txt", "Writing name", (err) =>{
    if(err)
        console.log("Error occurred");
    else
        console.log('File written successfully');
})
