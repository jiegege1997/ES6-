'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
//需要导出内容,让其他内容使用
// let a = 1;
// let b = 2;
// export{a,b}

// export let m = 10;
// console.log('3-module....');
// export function say(){
// 	console.log('say');


// 在每个模块中只可以默认导出一个模块
// export default function(){
// 	console.log('default');
// }
//export default {}
exports.default = {
	name: 'zhangsan',
	age: 12
};
var n = exports.n = 10;
var a = exports.a = 1;
var b = exports.b = 2;