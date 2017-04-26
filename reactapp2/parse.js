const esprima = require('esprima');
const fs = require('fs');

var ast = esprima.parse(fs.readFileSync(__dirname + '/src/Components/Container.js').toString(), { sourceType: 'module', jsx: true })

console.log(JSON.stringify(ast, null, 2));
