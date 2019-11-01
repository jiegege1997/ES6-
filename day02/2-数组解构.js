// let [a,b,c] = [1,2,3,4,5];
// console.log(a,b,c);
// 保存数组剩余的值
// let [a,b,c,...d] = [1,2,3,4,5,6,7];
// console.log(a,b,c);
// console.log(d);

let [a,b,c,...d] = [1,2,3,4,5,6,7];
console.log(a,b,c,d);


//扩展运算符还可以将数据展开   ...
let result = Math.max(...[2,4,7,65,23,45]);
console.log(result);

let result2 = Math.max(2,4,7,65,23,45);
console.log(result2);
console.log(...[2,4,5,6]);
//不能这么用  因为他是一个参数列表  不能赋值给别人   rest参数--->不推荐使用arguments了
// var result3 = (...[2,4,5,6]);
// console.log(result3);

function test([a,...tail]){
	var result = 0
	for(i=0;i<tail.length;i++){
		result += tail[i];
	}
	console.log(result+a);
}
test([8,2,3,4,5,6,9]);


//默认值的解释
// {
// 	let [a,b] =[];
// 	console.log(a,b);  //undefined
// 	let [c=1,d=2] = [];
// 	console.log(c,d);  // 1,2
// 	let [e=1,f=2] =[3,4];
// 	console.log(e,f)  //3,4
// }

