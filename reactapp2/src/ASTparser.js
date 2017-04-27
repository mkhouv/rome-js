const fs = require('fs');
const esprima = require('esprima');
const esquery = require('../.././esquery/esquery.js');
const path = require('path');
let counter = 0;
function ASTParser (filename){
let allComponents = [];
counter++;

//./src/App.js
//console.log(DIR)
// console.log(path.normalize(cwd + '/' + DIR + '.js'));
// let src = fs.readFileSync(path.normalize(cwd + '/' + DIR + '.js'));
// src = src.toString();

  if (filename.charAt(0) == '.') filename = filename.slice(1);
//   console.log(filename)
  let src = fs.readFileSync(path.join(__dirname + filename + '.js'));
  src = src.toString();
  let file = filename.split('/');
  let fi = file.pop();
  file = file.join('');

let ast = esprima.parse(src, {
    sourceType: 'module',
    jsx: true
});

let imports = esquery(ast, "ImportDeclaration");
let importVars = {};


for (let i = 0; ast.body[i].type === "ImportDeclaration";  i++) {
    if (ast.body[i].specifiers.length > 0) {
        let name = ast.body[i].specifiers[0].local.name
        importVars[name] = ast.body[i].source.value
    }
}


let components = esquery(ast, "JSXOpeningElement");

let identifiers = esquery(ast, "JSXIdentifier");

for (let i = 0; i < components.length; i++) {
    for (let j = 0; j < components[i].attributes.length; j++) {
        if (components[i].attributes[j].name.name === "component") {
            allComponents.push(components[i].attributes[j].value.expression.name);
        }
        if (components[i].name.name === "Link") {
            //console.log("found links");
           //console.log(JSON.stringify(components[i], null, 2));
        }
    }
}

for (let i = 0; i < identifiers.length; i += 1) {
    if (importVars.hasOwnProperty(identifiers[i].name) && identifiers[i].name !== "Router") {
        allComponents.push(identifiers[i].name);
    }
}
// console.log(__dirname, process.chdir("/") )
if (allComponents.length > 0){
allComponents.forEach((e) => {
    //console.log(ASTParser(path.join(importVars[e])))
    // if (importVars[e].charAt(0) === '.' && importVars[e].charAt(1) === '.') {
    //      ASTParser(path.join(importVars[e] + '.js'))
    // } else if (importVars[e].charAt(0) === '.') {
    //     ASTParser(path.join(importVars[e].slice(2) + '.js'))
    // } else {
    //      ASTParser(path.join(importVars[e] + '.js'))
    // }   
    if (importVars[e].includes('/')) {
    let dir = importVars[e].split('/');
    let name = dir.pop();
    if (dir[0] === '.') dir.shift();
    dir = dir.join('/');
    // if (dir.charAt(dir.length - 1) === '/') dir = dir.slice(0, -1);
    dir = file + '/' + dir;
    console.log(dir + '/' + name)
    ASTParser('/' + dir + '/' + name);
  }
    //console.log(path.normalize(cwd + "/" + e + '.js'));

});
}

//fs.writeFileSync(filename, JSON.stringify(components, null, 2));
fs.writeFileSync('gangg.json', JSON.stringify(ast, null, 2));
}

ASTParser('./App');
console.log(counter);