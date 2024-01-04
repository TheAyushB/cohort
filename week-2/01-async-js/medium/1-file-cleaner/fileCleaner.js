const { log } = require("console");
const fs = require("fs");

fs.readFile("text.txt", "utf-8", (err, data) => {
    let str = data.replace(/\s+/g, " ");
    fs.writeFile("text.js", str, (err) => {
        if(err){
            //throw err;
            console.log("Err: ", err);
        } else {
            console.log("File Cleaned!\n", str);
        }
    });
});

console.log("Outside Async Function...");