const { log } = require('console');
const fs = require('fs');
fs.readFile("text.txt", "utf-8", function(err, data){
    console.log("Data From File: ", data);
})

let alpha = 0;
for(let i = 0; i < 100000000000; i++){
    a++;
}
console.log(a);