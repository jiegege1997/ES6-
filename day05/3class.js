//Animal 类
class Animal{
	//构造器
	constructor(name,age){
		// this --> 新构建出来的实例
		this.name = name;
		this.age = age;
	}
	//实例方法
	sayName(){
		console.log('satName',this.name);
	}
	//静态方法
	static say(){
		console.log('静态方法');
	}
}

//静态属性
Animal.staticAttr = '静态属性';
//创建实例
let animal = new Animal('小小',1);
console.log(animal);  //Animal { name: '小小', age: 1 }
//访问实例属性和方法
console.log(animal.name);   //小小
console.log(animal.age);    //1
animal.sayName();  //sayname  小小
//访问静态方法和静态属性
Animal.say();  					//静态方法
console.log(Animal.staticAttr);  //静态属性 





