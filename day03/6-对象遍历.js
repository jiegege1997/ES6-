let obj = {
	name:'zhangsan',
	age:12,
	gender:'男'
};
//for-in
//返回属性名组成的数组
// let keys = Object.keys(obj);
// console.log(keys);
// //返回属性值的数组
// let values = Object.values(obj);
// console.log(values);
// //返回key-value键值对组成的数组
let entries = Object.entries(obj);
console.log(entries);
//for-of遍历
for(let [key,value] of entries){
	console.log(key,value);
}
//遍历数组
let arr = ['hello','time','term'];
for(let item of arr){
	console.log(item);
}
//遍历对象
for(let [key,value] of Object.entries(obj)){
	console.log(key,value)
}
//遍历类数组


//for-of不能直接遍历对象,遍历对象用for-in或者for-of遍历entries