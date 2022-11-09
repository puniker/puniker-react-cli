const fs = require('fs');
const {component} = require('./componentTemplate.js');

// grab component name from terminal argument
const [componentPath] = process.argv.slice(2);
const componentName =
  componentPath.split('/')[componentPath.split('/').length - 1];
console.log();
if (!componentPath) {
  throw new Error('Introduce un nombre para tu componente.');
}

const dir = `./${componentPath}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) {
  throw new Error('Ya existe un componente con este nombre.');
}

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) {
    throw err;
  }
}

// component.tsx
fs.writeFile(
  `${dir}/${componentName}.tsx`,
  component(componentName),
  writeFileErrorHandler,
);
// component.scss
fs.writeFile(`${dir}/${componentName}.scss`, '', writeFileErrorHandler);
// index.tsx
// fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);

////////////////
/// Optional ///
////////////////

// insert new component into 'components/index.ts file
// fs.readFile('./src/components/index.ts', 'utf8', function (err, data) {
//   if (err) {
//     throw err;
//   }

//   // grab all components and combine them with new component
//   const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);
//   const newComponents = [componentName, ...currentComponents].sort();

//   // create the import and export statements
//   const importStatements = newComponents
//     .map(importName => `import ${importName} from './${importName}';\n`)
//     .join('');
//   const exportStatements = `export {\n${newComponents
//     .map(component => `  ${component},\n`)
//     .join('')}};\n`;

//   const fileContent = `${importStatements}\n${exportStatements}`;

//   fs.writeFile('./src/components/index.ts', fileContent, writeFileErrorHandler);
// });
