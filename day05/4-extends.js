//父类
class Animal{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	sayName(){
		console.log('Animal中的实例方法',this.name);
	}
	static animalSay(){
		console.log('Animal中的静态方法');
	}
}
Animal.animalAttr = 'Animal中的静态属性';

class Dog extends Animal{
	constructor(name,age,color){
		super(name,age); 
		//在子类构造器中调用父类构造器  
		//在super底下用this
        this.color = color
	}
}

let dog = new Dog('大大',2,'黑色');
console.log(dog);
Dog.animalSay();
console.log(Dog.animalAttr);
//静态属性和方法的继承
console.log(Dog.__proto__===Animal);  //true

console.log(Dog.prototype.__proto__===Animal.prototype); //true

//console.log(obj.__proto__);

