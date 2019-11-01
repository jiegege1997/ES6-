
let name = 'zhangsan';
let age = 12;
let gender = '男';

//let {name,age,gender} = {};  解构   赋值
let obj = {
	name,
	age,
	gender,
	sayName:()=>{console.log('冲冲冲');}
};
console.log(obj);

let obj2 = {
	name,
	age,
	gender,
	sayHi:()=>{
		console.log('hi')
	}
}
console.log(obj2);
obj.sayName();
// 属性名可以用表达式去完成
// 给对象中添加10个属性  以name为前缀 以index为后缀

let obj3 = {};
for(let i=0;i<10;i++){
	obj3['name'+i] = i;
}
console.log(obj3);

let obj4 = {
	['name:'+name]:'hello'
}//{'namezhangsan':hello}
let obj5 = {
	[name]:'hello'
}
console.log(obj4);
console.log(obj5);
console.log(obj2.sayHi.name);
console.log(obj.sayName.name);
function test(){}
console.log(test.name);






