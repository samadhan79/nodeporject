const path = require('path');
console.log(path.sep)
console.log(path.delimiter)
console.log(path.basename('Tops/path.js'))
console.log(path.extname('Tops/path.js'))
console.log(path.parse('Tops/path.js'))
let pathToDir = path.normalize('C:\\node.js/module/js//dist');
console.log(pathToDir);

console.log('Current',__dirname)
console.log(path.resolve())
