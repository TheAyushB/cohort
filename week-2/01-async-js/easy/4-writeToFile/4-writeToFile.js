const fs = require('fs');

fs.writeFile("text.txt", "Alpha Beta Gamma", (err) => {
    if(err){
        throw err;
    }
    console.log("File Saved!");
});