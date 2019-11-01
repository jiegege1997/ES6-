function test(){
	console.log(this);
	(()=>{
		console.log(this);
	})();
}
//test();  global 两次

let obj ={
	name:'zhangsan',
	test
};
obj.test(); //obj

function test(){
	console.log(this);
	return ()=>{
		console.log(this);
	}
}

let obj ={
	name:'zhangsan',
	test:test()
}