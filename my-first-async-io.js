const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, 'utf8', (err, data) => {
  if (err) throw err;
  const lines = data.split('\n').length - 1;
  console.log(lines);
});
