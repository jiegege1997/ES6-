let {a,b} = {a:1,b:2};
console.log(a,b);

{
	let{name:myName,age:myAge} = {
		name:'zhangsan',
		gender:'男',
		age:12
	}
	console.log(myName,myAge);
}

{
	let{name,age} = {
		name:'zhangsan',
		gender:'男',
		age:19
	}
	console.log(name,age);
}
//设置了address的默认值
{
	let{name,age,address:myAddress='上海'} = {
		name:'zhangsan',
		gender:'男',
		age:19
	}
	console.log(name,age,myAddress);
	
}