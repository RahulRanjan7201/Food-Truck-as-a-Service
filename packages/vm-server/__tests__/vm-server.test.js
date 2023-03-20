'use strict';

const vmServer = require('..');
const assert = require('assert').strict;

assert.strictEqual(vmServer(), 'Hello from vmServer');
console.info('vmServer tests passed');
