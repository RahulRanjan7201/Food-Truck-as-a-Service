'use strict';

const vmMongoLib = require('..');
const assert = require('assert').strict;

assert.strictEqual(vmMongoLib(), 'Hello from vmMongoLib');
console.info('vmMongoLib tests passed');
