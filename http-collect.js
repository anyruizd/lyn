const http = require('http');
const url = process.argv[2];

http.get(url, res => {
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', chunk => rawData += chunk);
  res.on('end', () => {
    try {
      console.log(rawData.length)
      console.log(rawData);
    }
    catch (e) {
      console.error(e.message);
    }
  })
}).on('error', console.error)