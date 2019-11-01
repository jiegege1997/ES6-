let temp = {'0':'hello','1':'world',length:2}
console.log(Array.from(temp));
console.log(Array.of(10,11,22));
console.log(new Array(10,11));
//set 去重复
let arr = [24,45,24,6,45,2];
let set = new Set(arr);
console.log(set);
console.log(Array.from(set))
//扩展运算符
console.log([...set])
//数组去重复
console.log([... new Set(arr)]);

//find findIndex 迭代方法
//find  如果找不到  undefined
let result = arr.find((item)=>{
	return item>40
});
console.log(result);


//findIndex 是找符合条件的下标   如果找不到 返回-1
let result2 = arr.findIndex((item)=>{
	return item>40
});
console.log(result2);














