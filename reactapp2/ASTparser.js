const fs = require('fs');
const esprima = require('esprima');

let src = fs.readFileSync('./src/App.js');
src = src.toString();

let ast = esprima.parse(src, {
    sourceType: 'module',
    jsx: true
});

fs.writeFileSync('gang.json', JSON.stringify(ast, null, 2));

let f = ast.body[5].specifiers[0].local.name; //line 130




