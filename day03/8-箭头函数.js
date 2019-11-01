//普通函数
function test(){
	console.log(this);
}
test();


//箭头函数
let test2 = ()=>{
	//箭头函数内部没有自己的this，this指向父作用域中的this
	console.log(this);
}
test2();
let obj = {
	test,
	test2
};
obj.test();  //obj
obj.test2(); //{}

// console.log(this);  //module.exports
// console.log(this === module.exports);// true