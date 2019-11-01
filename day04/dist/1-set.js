'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var myset = new Set();

//size属性返回个数r
//不可以放重复数据
myset.add(1);
myset.add(1); //没用
myset.add(3);
var myset1 = new Set(['value1', 'value2', 'value2', 'value3']); //将数组转set
var myArray = [].concat(_toConsumableArray(myset)); //将set转数组
console.log(myArray);
console.log(myset);
console.log(myset1);

//数组的删除
myset.delete(3);
console.log(myset);

// 数组的清空
//myset1.clear();
//console.log(myset1)

//遍历
//Iterator对象可以使用for-of遍历,自己写代码遍历
var keys = myset1.keys();
console.log(keys);

var values = myset1.values();
console.log(values);
console.log('------------');
//遍历1 遍历
// 死循环
while (true) {
  var result = values.next();
  if (result.done) {
    break;
  } else {
    console.log(result.value);
  }
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log(value);
  }
  //遍历2
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log('------------');
var entries = myset1.entries();
console.log(entries);

//使用forEach
myset.forEach(function (value, key, set) {
  console.log(value, key, set);
});