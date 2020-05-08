const dirName = process.argv[2];
const extension = process.argv[3];
const mymodule = require('./mymodule.js');

mymodule(dirName, extension, (err, data) => {
  if (err) throw err;
  console.log(data.join('\n'))
})
