const path = require('path');
const fs = require('fs');
const PATHS = require('../../../config/paths');

const LIB_BASE_PATH = path.resolve(PATHS.packages, 'fiori3', 'src', 'lib');

const allLibFiles = fs
  .readdirSync(LIB_BASE_PATH)
  .filter((file) => fs.statSync(`${LIB_BASE_PATH}/${file}`).isFile())
  .map((file) => path.basename(file, '.ts'));

let fileContent = `// This is an autogenerated file, please do not modify this file manually.
// All exported modules have to be made available via the /lib folder.
// In case you added a new file to the /lib folder, pleas rerun the scripts/create-library-export.js script.
`;

console.log(allLibFiles);

allLibFiles.forEach((file) => {
  fileContent += `
import { ${file} } from './lib/${file}';`;
});

fileContent += `

export {
  `;
fileContent += allLibFiles.join(',\n  ');
fileContent += `
};
`;

fs.writeFileSync(path.join(PATHS.packages, 'fiori3', 'src', 'index.ts'), fileContent);
