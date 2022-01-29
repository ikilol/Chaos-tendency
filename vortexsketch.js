let index = 0;
let lastIndex = 0;
let ele;

const fs = require('fs');
const dir = 'Audio';

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});

