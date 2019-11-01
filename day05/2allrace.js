const {JSDOM} = require('JSDOM')
const {window} = new JSDOM('<!DOCTYPE html>');
const $ = require('jquery')(window);
//console.log($.ajax);
let p1 = new Promise((resolve,reject)=>{
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

let p2 = new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/article/findArticle?page=0&pageSize=10',
		method:'get',
		success(res){
			resolve(res);
		},error(error){
			reject(error);
		}
	})
});

let p3 = new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://134.175.154.93:8099/manager/user/findAllUser',
		method:'get',
		success(res){
			resolve(res);
		},error(error){
			reject(error);
		}
	})
});

// let p = Promise.all([p1,p2,p3]);
// p.then((res)=>{
// 	console.log(res)
// }).catch((error)=>{
// 	console.log(error)
// })

let p = Promise.race([p1,p2,p3]);
p.then((res)=>{
	console.log(res)
}).catch((error)=>{
	console.log(error)
})