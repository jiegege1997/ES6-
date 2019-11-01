function test(a,b='2',c,d='1'){}
console.log(test.name);    
console.log(test.length);  //只要遇到默认值  直接停止 直接返回length //1