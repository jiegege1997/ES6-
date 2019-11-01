//axios的使用
const axios = require('axios');
//console.log(axios);
//默认传递数据的是json数据格式
axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then(function(res){
	console.log(res.data)
}).catch(function(error){
	console.log(error)
});