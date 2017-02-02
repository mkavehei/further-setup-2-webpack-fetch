require('babel-register')();

// Disable webpack feasures not supported by Mocha
require.extensions['.css'] = function() {};