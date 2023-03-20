const toml = require('toml');
const fs = require('fs')
const tomlString = fs.readFileSync('./config/options.toml', 'utf8')
const parsedToml = toml.parse(tomlString);
module.exports = parsedToml