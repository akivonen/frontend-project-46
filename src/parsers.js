import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const parserMapping = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), './__fixtures__', filename), 'utf-8');

const parsers = (filename) => {
  const file = readFile(filename);
  const fileExtention = path.extname(filename).slice(1);
  const parsedData = parserMapping[fileExtention](file);
  return parsedData;
};
export default parsers;
