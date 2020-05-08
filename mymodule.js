const fs = require('fs');
const path = require('path');

function printFilteredFiles (dirName, fileExt, callback) {
  fs.readdir(dirName, (err, files) => {
    if (err) return callback(err);
  
    const filteredFiles = files.filter(element => {
      const elementExt = path.extname(element);
      return elementExt === `.${fileExt}`
    });

    callback(null, filteredFiles);
  })
}

module.exports = printFilteredFiles;