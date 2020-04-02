const yuml_diagram = require('yuml-diagram');
const fs = require('fs');
const argv = process.argv;
const fileName = argv.pop();
const filePath = argv.pop();
const file = fs.readFileSync(filePath, 'utf8');

console.log('--------------------');
console.log('✏️ Writing to SVG from: ' + filePath);
console.log('--------------------');
console.log(file.toString());
console.log('--------------------')
console.log('Output: ' + fileName);
console.log('--------------------')

var yuml = new yuml_diagram();

var svgLightBg = yuml.processYumlDocument(file.toString(), false);

fs.writeFileSync(fileName, svgLightBg);
