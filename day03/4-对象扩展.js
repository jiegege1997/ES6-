//Object.assign() 对象浅复制
let obj = {
	name:'zhangsan',
	friends:[],
	counts:{}
};
let obj2 = Object.assign(obj);
console.log(obj2 === obj );   //true


//对象的合并
let obj4 = {};
Object.assign(obj4,obj,obj2);
console.log(obj4);