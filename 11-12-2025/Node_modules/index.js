const fs = require("fs");

// fs.writeFile('message.txt', "Hi this is Aswin!!!", (err) => {
//   if (err) throw err;
//   console.log('The file has been created!');
// }); 

fs.readFile("./message.txt", "utf-8" ,(err, data) => {
  if (err) throw err;
  console.log(data);
}); 