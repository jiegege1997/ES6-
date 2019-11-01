console.log(+0===-0);   //true
console.log(NaN===NaN);	//false
console.log(Object.is(+0,-0));   //false
console.log(Object.is(NaN,NaN)); //true
console.log(Object.is(true,'true')); //false

//对象浅复制
//引用复制
 let obj = {};
 let obj2 = obj;
//对象的深复制和浅复制
 let obj = {name:'zhangsan'};
 let obj2  = JSON.parse(JSON.stringify(obj));


//Object.assign(target,...tail)  对象的合并
function myClone(target,...tail){

}
myClone({name:'zhangsan'},{age:12},{gender:'男'})






	