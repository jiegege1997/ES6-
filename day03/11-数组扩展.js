//fill  改变原数组
let arr = [1,2,3];
//数组填充
console.log(arr.fill(9));
console.log(arr);
//includes  包含
console.log(arr.includes(2));
//数组实例的遍历  keys  values entries
let keys = arr.keys();
//console.log(keys);
for(let key of keys){
	console.log(key)
}
let values = arr.values();
//console.log(values);
for(let key of values){
	console.log(key)
}
let entries = arr.entries();  //键值对
console.log(entries);//Array Iterator
for(let key of entries){
	console.log(key)
}



