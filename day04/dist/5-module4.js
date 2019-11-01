'use strict';

var _module = require('./3-module.js');

var _module2 = _interopRequireDefault(_module);

var _module3 = require('./4-module3.js');

var obj = _interopRequireWildcard(_module3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(obj);
console.log(_module2.default);