'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = exports.n = undefined;

var _module = require('./3-module.js');

Object.defineProperty(exports, 'n', {
  enumerable: true,
  get: function get() {
    return _module.n;
  }
});
Object.defineProperty(exports, 'a', {
  enumerable: true,
  get: function get() {
    return _module.a;
  }
});

var obj = _interopRequireWildcard(_module);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }