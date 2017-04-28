const fs = require('fs');
const esprima = require('esprima');
const esquery = require('../.././esquery/esquery.js');
const path = require('path');

let counter = 0;
let mainObj = {};

let outputObj = {};

function Component(name) {
  this.name = name;
}

function ASTParser (entry){
  counter++;
  const innerObj = {};
  const inner = {};

  if (entry.charAt(0) == '.') entry = entry.slice(1);

  let src = fs.readFileSync(path.join(__dirname + entry + '.js'));
  src = src.toString();
  let file = entry.split('/');
  let filename = file.pop();
  file = file.join('');

  inner.name = filename;

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
  
  const reactComponents = {};
  let components = esquery(ast, "JSXOpeningElement");

  for (let i = 0; i < components.length; i++) {
    for (let j = 0; j < components[i].attributes.length; j++) {
      if (components[i].attributes[j].name.name === "component") {
        reactComponents[components[i].attributes[j].value.expression.name] = null;
      }
    }
  }

  let identifiers = esquery(ast, "JSXIdentifier");
  for (let i = 0; i < identifiers.length; i += 1) {
    if (importVars.hasOwnProperty(identifiers[i].name) && identifiers[i].name !== "Router") {
      reactComponents[identifiers[i].name] = null;
    }
  }

  let keys = Object.keys(reactComponents);
  if (keys.length > 0){
    inner.children = [];
    keys.forEach((e) => {
    if (importVars[e].includes('/')) {
      let dir = importVars[e].split('/');
      let name = dir.pop();
      if (dir[0] === '.') dir.shift();
        dir = dir.join('/');
        dir = file + '/' + dir;
        let filePath = '/' + dir + '/' + name;
        filePath = filePath.replace(/\/+/g, '\/');
        inner.children.push(ASTParser(filePath));
      }
    });
  }
  mainObj = inner;
  return inner;
}

ASTParser('./App');
console.log('\n', JSON.stringify(mainObj, null, 2));