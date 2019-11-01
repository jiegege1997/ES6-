
let myset = new Set();


//size属性返回个数r
//不可以放重复数据
myset.add(1)
myset.add(1)  //没用
myset.add(3)
let myset1 = new Set(['value1','value2','value2','value3'])//将数组转set
var myArray = [...myset]; //将set转数组
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
let keys = myset1.keys();
console.log(keys);

let values = myset1.values();
console.log(values);
console.log('------------');
//遍历1 遍历
// 死循环
while(true){
 	let result = values.next();
 	if(result.done){
 		break;
 	}else{
 		console.log(result.value)
 	}
}
for(let value of values){
	console.log(value);
}
//遍历2
console.log('------------');
let entries = myset1.entries();
console.log(entries);


//使用forEach
myset.forEach(function(value,key,set){
	console.log(value,key,set);
})

