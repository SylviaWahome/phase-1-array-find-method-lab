const chai = require('chai');
global.expect = chai.expect;

const fs = require('fs');
const path = require('path');

// Automatically transpile code using Babel
require('@babel/register');

// Set up a DOM environment globally
require('jsdom-global')();

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
document.documentElement.innerHTML = html;

// Load and execute the JavaScript file
require(path.resolve(__dirname, '..', 'index.js'));
