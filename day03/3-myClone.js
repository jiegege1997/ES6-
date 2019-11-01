let obj = {};
let obj1 = {
	name:'zhangsan',
	age:13,
	friends:[1,2,3],
	count:{
		time:'2019-09-09'
	}
};
let obj2 = {
	name:'lisi',
	gender:'男',
	sayName:function(){}
};
let obj3 = {
	color:'red',
	weight:'100'
}

//Object.assign(target,...tail)  对象的合并
function myClone(target,...tail){
	tail.forEach(function(item){
		for(let key in item){
			if((Array.isArray(item[key]) || item[key].constructor=== Object)){
				target[key] = JSON.parse(JSON.stringify(item[key]));
			}
			else{
			target[key] = item[key];
			}
		}
		
	});
	return target;
}
myClone(obj,obj1,obj2,obj3);
console.log(obj);
console.log(obj.sayName===obj2.sayName); //true  引用传递
//obj.sayName  obj2.sayName
console.log(obj.friends===obj1.friengs); //false  因为他开辟了新的空间
console.log(obj.count===obj1.count);
