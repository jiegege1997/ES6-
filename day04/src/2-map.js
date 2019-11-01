let map = new Map();


//添加数据
map.set('name','zhangsan')
map.set('name','lisi')  //覆盖name=zhangsan
map.set('age','12')
map.set({},'lisi')
console.log(map);
console.log(map.size);
//console.log(map.get('name'));
// console.log(map.delete('name'));
// console.log(map);
//console.log(map.clear());
let keys = map.keys();
console.log(keys);
let values = map.values();
console.log(values);
let entries = map.entries();
console.log(entries);
console.log('----------------------------')
map.forEach( function(value,key,map) {
	console.log(value,key,map)
});