const fs = require('fs');
const path = require('path');
const dirName = process.argv[2];
const extension = process.argv[3];

fs.readdir(dirName, (err, files) => {
  if (err) throw err;
  
  files.forEach(element => {
    const elementExt = path.extname(element);

    if(elementExt === `.${extension}`) {
      console.log(element);
    }
  })
})

