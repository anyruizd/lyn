const http = require('http');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

function getData (url, callback) {
  http.get(url, res => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', chunk => rawData += chunk);
    res.on('end', () => {
      try {
        console.log(rawData);
        callback ? callback() : null
      }
      catch (e) {
        console.error(e.message);
      }
    })
  })
}

getData(url1, () => {
  getData(url2, () => {
    getData(url3)
  })
})

