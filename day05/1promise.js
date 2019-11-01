const {JSDOM} = require('JSDOM')
const {window} = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);
//console.log($.ajax);
let p = new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/category/findAllCategory',
		method:'get',
		success(res){
			resolve(res);
		},error(error){
			reject(error);
		}
	})
});
//传递的参数是promis对象，不做任何操作，原样返回
// let p1 = Promise.resolve(p);
// p1.then((res)=>{
// 	console.log(res,'从此后我和自己流浪');
// }).catch((error)=>{
// 	console.log(error);
// }).finally(()=>{
// 	console.log('finally');
// })

//如果参数是非thenable对象,那么返回resolved状态的promise对象
//非thenable对象 内部没有then方法的对象
//thenable对象 内部有then方法的对象
// let p2 = Promise.resolve('hello');
// p2.then(()=>{
// 	console.log('resolve');
// }).catch(()=>{
// 	console.log('reject');
// })
// let obj = {
// 	name:'zhangsan',
// 	then(){
// 		console.log('obj的then方法');
// 	}
// }
//参数是thenable对象  立即执行then方法  并且不会再执行后面的
// let p3 = Promise.resolve(obj);
// p3.then(()=>{
// 	console.log('resolve');
// })
//参数为空  打印resolve
// let p4 = Promise.resolve();
// p4.then(()=>{
// 	console.log('resolve')
// }).catch(()=>{
// 	console.log('reject')
// })


let p5 = Promise.reject('hello');
p5.then(()=>{
	console.log('resolve')
}).catch(()=>{
	console.log('reject')
})











